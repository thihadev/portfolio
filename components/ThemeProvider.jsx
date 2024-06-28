'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import React, { useState, useEffect } from 'react';
import Preloader from '@/components/Preloader';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes'

export default function ThemeProvider({ children, ...props}){
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          await new Promise(resolve => setTimeout(resolve, 2000)); // 2 seconds delay
          setLoading(false);
        } catch (error) {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) {
      return <Preloader loading={loading} />;
    }

    return (
        <>
        {!loading && (
            <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial animation properties
            animate={{ opacity: 1, y: 0 }} // Animation properties when component is mounted
            transition={{ duration: 1 }} // Duration of the animation
            >
                <NextThemesProvider {...props}>
                    {children}
                </NextThemesProvider>
            </motion.div>
        )}
            
        </>
    )
}