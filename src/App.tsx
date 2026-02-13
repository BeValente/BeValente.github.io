typescript 
import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Sistema de Gestão Médica
        </h1>
        <h2 className="text-2xl text-gray-700 mb-8">
          FF Radiologia - Portugal
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
          <div className="text-green-600 text-6xl mb-4">✅</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Sistema Online!
          </h3>
          <p className="text-gray-600 mb-4">
            O sistema está funcionando corretamente.
          </p>
          <p className="text-sm text-gray-500">
            Em breve: Login, Dashboard e Painel Administrativo
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
