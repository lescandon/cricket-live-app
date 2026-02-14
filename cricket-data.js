// This is a Vercel serverless function that fetches live cricket data
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  try {
    // For now, we'll return mock data
    // In production, you'd call the actual sports API here
    // Note: You'd need to set up environment variables for API keys
    
    const mockData = {
      tournament: "T20 World Cup 2026",
      venue: "Eden Gardens Stadium, Kolkata",
      teams: {
        home: { name: "England", abbreviation: "ENG" },
        away: { name: "Scotland", abbreviation: "SCO" }
      },
      status: "LIVE",
      toss: "England won the toss and chose to bowl",
      currentInning: 1,
      battingTeam: "Scotland",
      score: "42/3",
      overs: "5.5",
      runRate: "7.20",
      target: null,
      batsmen: [
        { 
          name: "Richie Berrington", 
          runs: 3, 
          balls: 7, 
          fours: 0, 
          sixes: 0, 
          strikeRate: 42.86, 
          onStrike: false,
          ballsFaced: [
            { ball: 1, runs: 1, type: "runs" },
            { ball: 2, runs: 0, type: "dot" },
            { ball: 3, runs: 2, type: "runs" },
            { ball: 4, runs: 0, type: "dot" },
            { ball: 5, runs: 0, type: "dot" },
            { ball: 6, runs: 0, type: "dot" },
            { ball: 7, runs: 0, type: "dot" }
          ]
        },
        { 
          name: "Matthew Cross", 
          runs: 0, 
          balls: 0, 
          fours: 0, 
          sixes: 0, 
          strikeRate: 0, 
          onStrike: true,
          ballsFaced: []
        }
      ],
      bowlers: [
        {
          name: "Sam Curran",
          overs: "0.5",
          runs: 14,
          wickets: 1,
          economy: "16.80",
          end: "High Court End",
          bowling: true
        },
        {
          name: "Jofra Archer",
          overs: "3.0",
          runs: 13,
          wickets: 2,
          economy: "4.33",
          end: "Pavilion End",
          bowling: false
        }
      ],
      partnership: {
        runs: 0,
        balls: 0
      }
    };

    res.status(200).json(mockData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cricket data' });
  }
}
