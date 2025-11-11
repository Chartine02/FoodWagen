import React from 'react'

const companyLinks = ['About us', 'Team', 'Careers', 'Blog']
const contactLinks = ['Help & Support', 'Partner with us', 'Ride with us']
const legalLinks = ['Terms & Conditions', 'Refund & Cancellations', 'Privacy Policy', 'Cookie Policy']

const Footer = () => {
  return (
    <footer className='bg-primary-dark px-40'>
        <div className='flex justify-between'>
            <div className='flex'>
                <div className='space-y-4'>
                    <h2 className='font-bold'>Company</h2>
                    <ul className='text-sm font-thin'>
                    {companyLinks.map(link=> <li key={link}>{link}</li>)}
                    </ul>
                </div>
                <div>
                <h2 className='font-bold'>Contact</h2>
                    <ul className='text-sm font-thin'>
                    {contactLinks.map(link=> <li key={link}>{link}</li>)}
                    </ul>
                </div>
                <div>
                <h2 className='font-bold'>Legal</h2>
                    <ul className='text-sm font-thin'>
                    {legalLinks.map(link=> <li key={link}>{link}</li>)}
                    </ul>
                </div>
            </div>
            <div></div>
        </div>
        <span className='divide-y-2 divide-gray-600'></span>
        <div className='flex justify-between text-xs'>
            <p>All rights reserved &copy; <span className='font-semibold'>Your company, 2021</span></p>
            <p>Made with💛 by <span className='font-semibold'>Themewagon</span></p>
        </div>
    </footer>
  )
}

export default Footer