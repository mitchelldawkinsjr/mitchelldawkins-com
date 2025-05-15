// src/app/contact/page.tsx (SERVER COMPONENT)
import { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Mitchell Dawkins',
  description: 'Get in touch with Mitchell Dawkins for collaboration, questions, or opportunities.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Contact Me
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          Have a question or want to work together? Get in touch!
        </p>
        
        <ContactForm />
        
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Connect With Me
          </h2>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex items-start space-x-4">
              <div className="text-blue-600 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">Email</h3>
                <a href="mailto:hello@mitchelldawkins.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  hello@mitchelldawkins.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-blue-600 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">Social Media</h3>
                <div className="flex space-x-3 mt-2">
                  <a href="https://github.com/mitchelldawkinsjr" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://linkedin.com/in/mitchell-dawkins-ii-81614687/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="https://dawkinsfamilyfoundation.org" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                        <path d="M750 2472 l-25 -20 0 -960 c0 -930 1 -961 19 -981 21 -23 65 -28 97
                        -11 24 13 38 41 110 219 68 167 79 227 54 311 -42 148 -47 203 -40 499 6 280
                        10 311 40 311 30 0 37 -24 50 -189 7 -87 24 -131 61 -166 46 -42 108 -27 133
                        32 11 27 124 432 162 583 27 104 38 128 61 136 23 7 40 -12 33 -36 -2 -8 -29
                        -120 -61 -248 l-57 -234 20 -26 c26 -35 81 -42 107 -13 9 10 69 142 131 292
                        63 150 120 276 126 280 19 11 39 -1 39 -23 0 -11 -49 -141 -110 -288 -60 -147
                        -110 -277 -110 -287 0 -29 29 -63 54 -63 45 0 73 39 187 265 107 212 135 255
                        159 240 21 -13 7 -51 -101 -272 -61 -125 -113 -243 -116 -261 -7 -41 27 -82
                        68 -82 34 0 69 39 163 185 51 79 77 111 94 113 32 5 29 -38 -6 -91 -97 -144
                        -210 -369 -288 -572 -53 -137 -89 -191 -204 -305 -92 -92 -108 -114 -133 -175
                        -34 -86 -34 -110 -2 -131 24 -16 79 -15 190 2 310 49 506 219 585 506 42 157
                        50 239 46 523 -3 228 -7 285 -24 364 -55 249 -170 409 -356 496 -170 80 -229
                        88 -711 93 -409 4 -421 3 -445 -16z m803 -23 c234 -20 375 -76 493 -193 152
                        -152 214 -369 214 -754 0 -570 -152 -849 -513 -942 -73 -18 -276 -44 -284 -36
                        -2 2 14 45 36 96 32 74 50 100 88 133 137 117 180 181 258 377 70 177 133 304
                        236 476 83 137 92 171 60 203 -16 16 -26 18 -52 11 -17 -5 -33 -11 -34 -12 -2
                        -2 -42 -64 -89 -138 -48 -74 -93 -141 -101 -149 -20 -20 -65 -6 -65 20 0 11
                        54 132 120 269 66 137 120 258 120 269 0 47 -69 76 -103 43 -11 -12 -75 -128
                        -141 -259 -94 -186 -126 -239 -142 -241 -49 -7 -43 17 77 308 65 157 119 295
                        119 307 0 24 -43 63 -70 63 -9 0 -24 -8 -33 -18 -9 -9 -66 -139 -127 -287
                        -111 -270 -133 -315 -149 -315 -5 0 -19 8 -31 18 l-22 18 61 238 c34 130 61
                        250 61 266 0 36 -24 60 -60 60 -35 0 -66 -36 -80 -94 -41 -158 -174 -637 -185
                        -663 -17 -40 -51 -44 -83 -10 -32 34 -41 68 -48 184 -7 122 -22 168 -58 184
                        -31 14 -72 -8 -86 -47 -6 -14 -10 -162 -10 -333 0 -282 2 -315 21 -387 41
                        -155 43 -177 20 -251 -12 -38 -47 -129 -79 -203 l-57 -135 -38 -3 -37 -3 0
                        970 0 971 338 0 c185 0 390 -5 455 -11z"/>
                        <path d="M1348 1535 c-24 -23 -37 -58 -83 -222 -10 -35 -21 -63 -25 -63 -4 0
                      -10 14 -14 32 -8 40 -43 78 -71 78 -12 0 -32 -12 -46 -26 -23 -24 -24 -33 -27
                      -182 -3 -118 0 -171 12 -221 19 -76 19 -75 -53 -249 -28 -67 -51 -130 -51
                      -140 0 -11 8 -26 18 -35 28 -26 300 -25 330 1 12 9 40 60 62 112 29 66 56 110
                      89 145 62 66 74 84 115 185 19 47 61 134 94 194 68 126 70 149 10 179 l-37 18
                      13 37 c19 55 -4 102 -51 102 -16 0 -27 8 -33 24 -9 25 -46 56 -66 56 -7 0 -27
                      -12 -44 -26 l-31 -27 -22 21 c-37 33 -61 35 -89 7z m67 -21 c8 -9 13 -24 11
                      -33 -32 -100 -63 -242 -54 -247 16 -10 23 3 78 141 29 72 58 136 65 144 17 18
                      55 5 55 -19 0 -10 -25 -78 -55 -151 -30 -73 -55 -139 -55 -147 0 -35 30 5 90
                      121 54 106 69 127 88 127 12 0 25 -6 28 -14 3 -8 -23 -73 -59 -145 -47 -97
                      -61 -134 -52 -141 14 -12 25 0 84 88 43 64 63 74 84 42 7 -12 0 -30 -25 -70
                      -46 -71 -98 -176 -134 -269 -22 -58 -44 -91 -94 -145 -56 -61 -71 -86 -105
                      -173 l-40 -103 -159 0 c-123 0 -157 3 -153 13 3 6 33 77 66 156 34 79 61 156
                      61 172 0 15 -7 56 -16 91 -13 51 -15 90 -9 208 7 147 13 170 45 170 23 0 29
                      -16 36 -101 8 -81 24 -112 47 -89 8 8 34 85 57 170 62 226 73 246 115 204z"/>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}