import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Loader2 } from 'lucide-react';
import display from './images/washing-machine.png';
import Header from './Header';
import Footer from './Footer';
import { FoodBankOutlined, FourGMobiledataRounded } from '@mui/icons-material';

const ServiceProvidersPage = () => {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }
  }, []);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const response = await fetch('http://localhost:3000/user/providers', {
          credentials: 'include'
        });
        const fetchedProviders = await response.json();

        if (userLocation) {
          const providersWithDistance = fetchedProviders.map(provider => ({
            ...provider,
            distance: calculateDistance(
              userLocation.latitude,
              userLocation.longitude,
              parseFloat(provider.lat),
              parseFloat(provider.long)
            )
          }));
          setProviders(providersWithDistance.sort((a, b) => a.distance - b.distance));
        } else {
          setProviders(fetchedProviders);
        }
      } catch (error) {
        setError('Failed to fetch service providers');
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, [userLocation]);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    // Simple distance calculation for demo
    return Math.round(Math.sqrt(Math.pow(lat2 - lat1, 2) + Math.pow(lon2 - lon1, 2)) * 111000);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-50 p-4 rounded-lg text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Providers</h1>
          <p className="text-lg text-gray-600">Find the best service providers near you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {providers.map((provider, index) => (
            <motion.div
              key={provider.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-100 ${
                selectedProvider === provider.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedProvider(provider.id)}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <img
                  src={display}
                  alt={provider.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{provider.name}</h3>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <p className="text-sm">{provider.address}</p>
                </div>

                {provider.distance && (
                  <div className="flex items-center text-gray-600 mb-6">
                    <Navigation className="w-5 h-5 mr-2" />
                    <p className="text-sm">
                      {provider.distance < 1000
                        ? `${provider.distance} meters`
                        : `${(provider.distance / 1000).toFixed(1)} km`} away
                    </p>
                  </div>
                )}

                <a
                  href={`/provider/${provider.id}/services`}
                  className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  View Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {providers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No service providers found in your area.</p>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default ServiceProvidersPage;