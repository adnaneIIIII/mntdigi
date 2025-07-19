"use client"

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, ArrowRight, CheckCircle } from "lucide-react"
import Link from 'next/link'

interface CheckmarkProps {
  size?: number
  strokeWidth?: number
  className?: string
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: i * 0.3,
        type: "spring",
        duration: 1.8,
        bounce: 0.1,
      },
      opacity: { delay: i * 0.3, duration: 0.3 },
    },
  }),
}

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  },
}



export default function ThankYouPage() {
  // Add this at the top of the component
  // const [orderRef] = React.useState(() => 
  //   `#ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
  // );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div
       
      >
        <Card className="w-full max-w-md mx-auto shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            {/* Animated Checkmark */}
          <div className="flex justify-center">
            <CheckCircle className="h-24 w-24 text-orange-500 my-8" />
          </div>

            {/* Main Content */}
            <div
              className="text-center space-y-4"
            
            >
              <h1
                className="text-3xl font-bold text-gray-900 tracking-tight"
             
              >
                Thank You!
              </h1>

              <h2
                className="text-lg font-semibold text-orange-600"
              
              >
                Your order has been received
              </h2>

              <p
                className="text-gray-600 leading-relaxed max-w-sm mx-auto"
               
              >
                We&apos;re processing your subscription and will send you the details shortly.
              </p>
            </div>

            {/* Notification Methods */}
            <div
              className="mt-8 space-y-3"
              
            >
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                 <Link href="mailto:mntdigital.com@gmail.com">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span>Email updates</span>
                </div>
                </Link>
                 <Link href="https://wa.me/17822221472">
                <div className="flex items-center gap-2">
                   
                  <MessageCircle className="w-4 h-4 text-green-500" />
                  <span>WhatsApp alerts</span>
               
                </div>
                   </Link>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              className="mt-8 space-y-3"
             
            >
              <Button
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={() => (window.location.href = "/how-it-work")}
              >
                How it work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <Button
                variant="outline"
                className="w-full border-gray-200 text-gray-600 hover:bg-gray-50 py-3 rounded-lg transition-all duration-200 bg-transparent"
                onClick={() => (window.location.href = "/")}
              >
                Back to Home
              </Button>
            </div>

            {/* Order Reference */}
            {/* <motion.div
              className="mt-6 pt-6 border-t border-gray-100 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.5 }}
            >
              <p className="text-xs text-gray-400">
                Order reference:{" "}
                <span className="font-mono text-gray-600">
                  {orderRef}
                </span>
              </p>
            </motion.div> */}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
