import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  CheckCircleIcon, 
  PlayCircleIcon, 
  ClockIcon, 
  SparklesIcon, 
  MapIcon,
  TrophyIcon 
} from '@heroicons/react/24/outline'

const Roadmap = () => {
  const [selectedPath, setSelectedPath] = useState('computer-science')

  const roadmapData = {
    'computer-science': {
      title: 'Backend Development',
      description: 'Complete roadmap to become a Backend Developer',
      gradient: 'from-blue-500 to-cyan-500',
      nodes: [
        {
          id: 1,
          title: 'Internet',
          status: 'topic',
          x: 20,
          y: 30,
          description: 'Fundamentals of how internet works',
          connections: ['http', 'domain', 'hosting', 'dns', 'browsers'],
          type: 'main',
          childNodes: [
            { id: 'http', title: 'What is HTTP?', x: 35, y: 15 },
            { id: 'domain', title: 'What is Domain Name?', x: 35, y: 25 },
            { id: 'hosting', title: 'What is hosting?', x: 35, y: 35 },
            { id: 'dns', title: 'DNS and how it works?', x: 35, y: 45 },
            { id: 'browsers', title: 'Browsers and how they work?', x: 35, y: 55 }
          ]
        },
        {
          id: 2,
          title: 'Pick a Language',
          status: 'topic',
          x: 45,
          y: 30,
          type: 'main',
          description: 'Choose your backend programming language',
          connections: ['js', 'python', 'java', 'csharp', 'php', 'rust'],
          childNodes: [
            { id: 'js', title: 'JavaScript', x: 55, y: 15, type: 'language' },
            { id: 'python', title: 'Python', x: 55, y: 25, type: 'language' },
            { id: 'java', title: 'Java', x: 55, y: 35, type: 'language' },
            { id: 'csharp', title: 'C#', x: 55, y: 45, type: 'language' },
            { id: 'php', title: 'PHP', x: 55, y: 55, type: 'language' },
            { id: 'rust', title: 'Rust', x: 55, y: 65, type: 'language' }
          ]
        },
        {
          id: 3,
          title: 'Algorithms',
          status: 'pending',
          x: 40,
          y: 40,
          description: 'Sorting, searching, dynamic programming',
          connections: [4, 5],
          prerequisites: [1, 2]
        },
        {
          id: 4,
          title: 'Database Systems',
          status: 'pending',
          x: 60,
          y: 30,
          description: 'SQL, NoSQL, database design',
          connections: [5, 6],
          prerequisites: [2, 3]
        },
        {
          id: 5,
          title: 'Operating Systems',
          status: 'pending',
          x: 80,
          y: 20,
          description: 'Processes, memory, file systems',
          connections: [6],
          prerequisites: [3, 4]
        },
        {
          id: 6,
          title: 'Advanced Topics',
          status: 'pending',
          x: 80,
          y: 40,
          description: 'Distributed systems, security, AI',
          connections: [],
          prerequisites: [4, 5]
        },
      ]
    },
    'mathematics': {
      title: 'Mathematics for CS',
      description: 'Essential mathematics for computer science',
      gradient: 'from-purple-500 to-pink-500',
      nodes: [
        { id: 1, title: 'Linear Algebra', status: 'completed', x: 30, y: 20, description: 'Vectors, matrices, eigenvalues' },
        { id: 2, title: 'Calculus', status: 'current', x: 70, y: 20, description: 'Derivatives, integrals, optimization' },
        { id: 3, title: 'Statistics', status: 'pending', x: 50, y: 50, description: 'Probability, distributions, inference' },
        { id: 4, title: 'Discrete Math', status: 'pending', x: 50, y: 80, description: 'Logic, sets, graph theory' }
      ]
    },
    'web-development': {
      title: 'Web Development',
      description: 'Full-stack web development journey',
      gradient: 'from-green-500 to-emerald-500',
      nodes: [
        { id: 1, title: 'HTML & CSS', status: 'completed', x: 25, y: 20, description: 'Markup and styling fundamentals' },
        { id: 2, title: 'JavaScript', status: 'completed', x: 75, y: 20, description: 'Programming language of the web' },
        { id: 3, title: 'React.js', status: 'current', x: 50, y: 45, description: 'Modern frontend framework' },
        { id: 4, title: 'Node.js', status: 'pending', x: 25, y: 70, description: 'Backend JavaScript runtime' },
        { id: 5, title: 'Databases', status: 'pending', x: 75, y: 70, description: 'Data storage and management' }
      ]
    },
  }

  const currentRoadmap = roadmapData[selectedPath]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIcon className="w-6 h-6 text-white" />
      case 'current':
        return <PlayCircleIcon className="w-6 h-6 text-white" />
      default:
        return <ClockIcon className="w-6 h-6 text-white" />
    }
  }

  const getNodeStyles = (node) => {
    const type = node.type || 'default';
    const status = node.status || 'pending';

    switch (type) {
      case 'main':
        return 'bg-yellow-400 text-black border-yellow-500 hover:bg-yellow-300';
      case 'language':
        return 'bg-blue-500/20 border-blue-400/50 hover:bg-blue-500/30';
      case 'topic':
        return 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/50 hover:from-purple-500/30 hover:to-pink-500/30';
      default:
        switch (status) {
          case 'completed':
            return 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-400/50 hover:from-green-500/30 hover:to-emerald-500/30';
          case 'current':
            return 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-400/50 hover:from-blue-500/30 hover:to-cyan-500/30 animate-pulse';
          default:
            return 'bg-white/10 border-white/20 hover:bg-white/20';
        }
    }
  }

  const getStatusStyles = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-400/50';
      case 'current':
        return 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-400/50 animate-pulse';
      case 'topic':
        return 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/50';
      default:
        return 'bg-white/10 border-white/20';
    }
  }

  const pathOptions = [
    { key: 'computer-science', label: 'Computer Science', icon: '💻' },
    { key: 'mathematics', label: 'Mathematics', icon: '📐' },
    { key: 'web-development', label: 'Web Development', icon: '🌐' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900 overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circuit board pattern */}
        <svg className="absolute w-full h-full opacity-5">
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="rgba(59,130,246,0.5)" />
            <circle cx="90" cy="10" r="2" fill="rgba(59,130,246,0.5)" />
            <circle cx="90" cy="90" r="2" fill="rgba(59,130,246,0.5)" />
            <circle cx="10" cy="90" r="2" fill="rgba(59,130,246,0.5)" />
            <path d="M 10 10 L 90 10 M 90 10 L 90 90 M 90 90 L 10 90 M 10 90 L 10 10" 
                  stroke="rgba(59,130,246,0.2)" strokeWidth="0.5" fill="none"/>
            <path d="M 10 50 L 90 50 M 50 10 L 50 90" 
                  stroke="rgba(59,130,246,0.1)" strokeWidth="0.5" fill="none"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center mb-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-2xl"></div>
            <MapIcon className="w-10 h-10 text-blue-400 mr-3 relative z-10" />
            <h1 className="text-5xl md:text-6xl font-extrabold relative z-10">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Developer
              </span>
              <span className="text-white ml-3">Roadmap</span>
            </h1>
            <SparklesIcon className="w-10 h-10 text-purple-400 ml-3 relative z-10 animate-spin" style={{ animationDuration: '3s' }} />
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Navigate your learning journey with structured paths and real-time progress tracking
          </p>
        </motion.div>

        {/* Path Selector Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {pathOptions.map((option, index) => (
              <motion.button
                key={option.key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedPath(option.key)}
                className={`relative px-8 py-5 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-3 overflow-hidden group ${
                  selectedPath === option.key
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/30 border-2 border-blue-400/50'
                    : 'bg-gray-800/50 backdrop-blur-sm text-gray-300 border border-gray-700/50 hover:border-gray-600'
                }`}
              >
                {selectedPath === option.key && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
                )}
                <span className="text-2xl relative z-10">{option.icon}</span>
                <span className="relative z-10 text-base">{option.label}</span>
                {selectedPath === option.key && (
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Main Roadmap Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-800/50 p-8 shadow-2xl overflow-hidden"
        >
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
          
          {/* Title Section */}
          <div className="text-center mb-10 relative z-10">
            <h2 className={`text-4xl font-bold bg-gradient-to-r ${currentRoadmap.gradient} bg-clip-text text-transparent mb-3`}>
              {currentRoadmap.title}
            </h2>
            <p className="text-gray-400 text-lg">{currentRoadmap.description}</p>
            <div className="mt-4 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          </div>
          
          {/* Roadmap Visualization Area */}
          <div className="relative min-h-[1200px] mb-10 bg-gray-800/20 rounded-2xl p-4 border border-gray-700/30">
            {/* SVG Connections Layer */}
            <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              {/* Background dots pattern */}
              <pattern id="dots-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.5" fill="rgba(148,163,184,0.1)" />
              </pattern>
              <rect width="100" height="100" fill="url(#dots-pattern)" />
              
              {/* Define gradients for connections */}
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(59,130,246,0.6)" />
                  <stop offset="100%" stopColor="rgba(147,51,234,0.6)" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Connection paths */}
              {currentRoadmap.nodes.map((node) => (
                <>
                  {/* Child node connections */}
                  {node.childNodes?.map((childNode, idx) => {
                    const startX = node.x;
                    const startY = node.y;
                    const endX = childNode.x;
                    const endY = childNode.y;
                    const midX = (startX + endX) / 2;
                    
                    return (
                      <motion.g key={`child-${node.id}-${childNode.id}`}>
                        <motion.path
                          d={`M ${startX},${startY} Q ${midX},${startY} ${endX},${endY}`}
                          stroke="url(#connectionGradient)"
                          strokeWidth="1"
                          fill="none"
                          strokeDasharray="3 3"
                          opacity="0.4"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.4 }}
                          transition={{ duration: 1.5, delay: 0.5 + idx * 0.1 }}
                        />
                      </motion.g>
                    );
                  })}

                  {/* Main node connections */}
                  {node.connections?.map((targetId, idx) => {
                    const target = node.childNodes?.find(n => n.id === targetId) ||
                                 currentRoadmap.nodes.find(n => n.id === targetId);
                    if (!target) return null;
                    
                    const startX = node.x;
                    const startY = node.y;
                    const endX = target.x;
                    const endY = target.y;
                    
                    const angle = Math.atan2(endY - startY, endX - startX);
                    const arrowSize = 1.5;
                    
                    return (
                      <motion.g key={`main-${node.id}-${targetId}`}>
                        <motion.path
                          d={`M ${startX},${startY} L ${endX},${endY}`}
                          stroke={node.status === 'completed' ? '#10B981' : 
                                node.status === 'current' ? '#3B82F6' : 
                                'rgba(148,163,184,0.3)'}
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 1, delay: 0.3 + idx * 0.1 }}
                        />
                        {/* Arrow head */}
                        <motion.polygon
                          points={`${endX},${endY} ${endX - arrowSize * Math.cos(angle) - arrowSize * Math.sin(angle)},${endY - arrowSize * Math.sin(angle) + arrowSize * Math.cos(angle)} ${endX - arrowSize * Math.cos(angle) + arrowSize * Math.sin(angle)},${endY - arrowSize * Math.sin(angle) - arrowSize * Math.cos(angle)}`}
                          fill={node.status === 'completed' ? '#10B981' : 
                               node.status === 'current' ? '#3B82F6' : 
                               'rgba(148,163,184,0.3)'}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 1.3 + idx * 0.1 }}
                        />
                      </motion.g>
                    );
                  })}
                </>
              ))}
            </svg>

            {/* Node Cards */}
            {currentRoadmap.nodes.map((node, index) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.8 + index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 1 }}
                  className={`
                    relative px-6 py-5 rounded-2xl border-2 backdrop-blur-md
                    transition-all duration-300 shadow-lg hover:shadow-2xl
                    min-w-[260px] max-w-[300px] cursor-pointer
                    ${node.type === 'main' 
                      ? 'bg-gradient-to-br from-amber-500/90 to-orange-500/90 border-amber-400/50 text-white shadow-amber-500/30' 
                      : node.type === 'language'
                      ? 'bg-gradient-to-br from-blue-600/30 to-indigo-600/30 border-blue-400/50 text-blue-100'
                      : node.status === 'completed'
                      ? 'bg-gradient-to-br from-emerald-600/30 to-green-600/30 border-emerald-400/50 text-emerald-100'
                      : node.status === 'current'
                      ? 'bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border-blue-400/50 text-blue-100'
                      : node.status === 'topic'
                      ? 'bg-gradient-to-br from-purple-600/30 to-pink-600/30 border-purple-400/50 text-purple-100'
                      : 'bg-gray-800/50 border-gray-600/50 text-gray-300 hover:border-gray-500'
                    }
                  `}
                >
                  {/* Glow effect for active/main nodes */}
                  {(node.status === 'current' || node.type === 'main') && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-xl animate-pulse"></div>
                  )}
                  
                  {/* Status badge */}
                  <div className="absolute -top-3 -right-3 p-2 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 shadow-lg">
                    {getStatusIcon(node.status)}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="font-bold text-xl mb-2">{node.title}</h3>
                    <p className="text-sm opacity-90 mb-3">{node.description}</p>
                    
                    {/* Progress indicator for current */}
                    {node.status === 'current' && (
                      <div className="w-full h-1 bg-gray-700/50 rounded-full overflow-hidden mt-3">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-blue-400 to-cyan-400"
                          initial={{ width: 0 }}
                          animate={{ width: '60%' }}
                          transition={{ duration: 2, ease: "easeOut" }}
                        />
                      </div>
                    )}

                    {/* Prerequisites section */}
                    {node.prerequisites?.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-white/10">
                        <p className="text-xs opacity-70 mb-2 font-semibold">Prerequisites:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {node.prerequisites.map(preId => {
                            const pre = currentRoadmap.nodes.find(n => n.id === preId);
                            return pre && (
                              <span
                                key={pre.id}
                                className={`
                                  text-xs px-2.5 py-1 rounded-full font-medium
                                  ${pre.status === 'completed' 
                                    ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-400/30' 
                                    : 'bg-gray-700/30 text-gray-400 border border-gray-600/30'}
                                `}
                              >
                                {pre.title}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Progress Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden text-center p-6 bg-gradient-to-br from-emerald-600/20 to-green-600/20 border border-emerald-500/30 rounded-2xl backdrop-blur-md group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <TrophyIcon className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
              <div className="text-4xl font-bold text-emerald-400 mb-2">
                {currentRoadmap.nodes.filter(n => n.status === 'completed').length}
              </div>
              <div className="text-emerald-300 font-medium">Completed</div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden text-center p-6 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl backdrop-blur-md group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <PlayCircleIcon className="w-10 h-10 text-blue-400 mx-auto mb-3 animate-pulse" />
              <div className="text-4xl font-bold text-blue-400 mb-2">
                {currentRoadmap.nodes.filter(n => n.status === 'current').length}
              </div>
              <div className="text-blue-300 font-medium">In Progress</div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden text-center p-6 bg-gradient-to-br from-gray-600/20 to-slate-600/20 border border-gray-500/30 rounded-2xl backdrop-blur-md group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <ClockIcon className="w-10 h-10 text-gray-400 mx-auto mb-3" />
              <div className="text-4xl font-bold text-gray-400 mb-2">
                {currentRoadmap.nodes.filter(n => n.status === 'pending').length}
              </div>
              <div className="text-gray-300 font-medium">Upcoming</div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Roadmap