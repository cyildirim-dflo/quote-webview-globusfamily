import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import 'swiper/css'
import ItineraryHighlights from './ItineraryHighlights'
import {KeyboardArrowUp } from '@mui/icons-material'

interface Props {
  section: ItinerarySection
}

const Itinerary: React.FC<Props> = ({ section }) => {
  const [expanded, setExpanded] = useState(null as number | null)

  return (
    <div className='w-full bg-white'>
      <div className='max-md:px-4 mx-auto flex flex-col max-w-screen-xl py-[80px] justify-center overflow-hidden bg-white'>
        <h2 className='text-4xl md:text-5xl text-center mb-[40px] font-serif'>
          {section.title}
        </h2>
        <p className='text-xl text-center mb-[40px]'>
          {section.description}
        </p>
        <ItineraryHighlights />
        
        {section.subtitle && (
          <h2 className='text-4xl md:text-5xl text-center mb-[40px] text-primary'>
            {section.subtitle}
          </h2>
        )}
        {section.travelDetails.parties.map((party, index) => {
          return (
            <div className='flex flex-col' key={'party-' + index}>
              <div className=''>
                <div>
                  {party.itineraryItems.map((item, idx) => {
                    return (
                      <div key={idx} className='pt-[10px] pb-[10px] px-[20px]'>
                        <ItineraryItem
                          item={item}
                          key={'itinerary-' + idx}
                          isOpen={idx === expanded}
                          toggleOpen={() => setExpanded(idx)}
                        />
                      </div>
                    )
                  })}
                </div>
                {section.pdfLink && (
                  <div className='mt-[40px] text-center flex items-center justify-center '>
                    <a
                      href={section.pdfLink}
                      target='_blank'
                      className='btn-primary'
                    >
                      {' '}
                      Download Trip Details
                    </a>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const ItineraryItem: React.FC<{
  item: ItineraryItem
  isOpen: boolean
  toggleOpen: () => void
}> = ({ item, isOpen, toggleOpen }) => {
  return (
    <div
      className='flex flex-col border border-border justify-between cursor-pointer max-w-screen-xl mx-auto'
      onClick={() => toggleOpen()}
    >
      <div className='flex flex-row gap-1 items-center '>
        <div className='bg-primary text-white h-[80px] w-[80px] flex items-center justify-center'>
          <motion.div className='py-4 text-xl' animate={{ scale: isOpen ? 1.3 : 1 }}>
            {item.day}
          </motion.div>
        </div>
        <div className='flex-1 flex flex-col text-left pl-4'>
          <h3 className='md:text-xl text-gold font-serif'>
            {' '}
            {item.header?.title}
          </h3>
        </div>
        <div className='h-[80px] w-[80px] flex items-center justify-center'>
          <motion.div className='py-4' animate={{ rotate: isOpen ? 0 : 180 }}>
            <KeyboardArrowUp className='text-4xl' />
          </motion.div>
        </div>
      </div>
      <AnimatePresence mode='wait'>
        <motion.div
          key={isOpen ? 'open' : 'close'}
          initial={{ y: 10, opacity: 0, display: 'none' }}
          animate={
            isOpen
              ? { y: 0, opacity: 1, display: 'flex' }
              : { display: 'none', opacity: 0 }
          }
          exit={{ y: -10, opacity: 0, display: 'none' }}
          transition={{ duration: 0.2 }}
          className='mt-4 p-4'
        >
          {item.image && <img src={item.image} alt={item.header?.title} />}
          <p>{item.header?.description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Itinerary
