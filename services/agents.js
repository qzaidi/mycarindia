const getNearbyAgents = userLocation => {

  const res = [
    {
      title: "5m",
      coordinates: {
        latitude: 28.638865,
        longitude: 77.359711,
      },
    },
    {
      title: "10m",
      coordinates: {
        latitude: 28.631268,
        longitude: 77.3524,
      },
    },
  ]
    
   return res.map(agent => {
        return {
          title: agent.title,
          coords: agent.coordinates,
        }
   })
}

export default {
  getNearbyAgents,
}
