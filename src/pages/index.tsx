
import { useAuth } from "@/hooks/useAuth";
import { withAuth } from "@/middleware/withAuth";
import { Search, TrendingUp, Share2, ThumbsUp, ThumbsDown, ChevronRight } from 'lucide-react';

const Home = () => {
  const categories = [
    "Education", "Healthcare", "Infrastructure", "Environment", 
    "Women's Rights", "Social Justice", "Rural Development"
  ];

  const issues = [
    {
      id: 1,
      title: "Improve Rural Healthcare Access in Bihar",
      category: "Healthcare",
      description: "Our rural communities are facing severe healthcare challenges with limited access to medical facilities. We need immediate government intervention to establish primary healthcare centers in every village.",
      image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=1200",
      agreed: 12345,
      disagreed: 234,
      shared: 1456,
      author: "Rahul Kumar",
      location: "Patna, Bihar",
      timestamp: "2h ago"
    },
    {
      id: 2,
      title: "Modernize Government School Infrastructure",
      category: "Education",
      description: "Government schools in our district lack basic facilities like proper classrooms, laboratories, and digital learning tools. We propose a comprehensive modernization plan to bridge the educational divide.",
      agreed: 8234,
      disagreed: 156,
      shared: 945,
      author: "Priya Singh",
      location: "Delhi, NCR",
      timestamp: "4h ago"
    }
  ];

  const trendingIssues = [
    {
      id: 1,
      title: "Clean Water Initiative for Urban Slums",
      supportCount: "25,234 supporters"
    },
    {
      id: 2,
      title: "Save Historical Monuments",
      supportCount: "18,453 supporters"
    },
    {
      id: 3,
      title: "Better Public Transportation",
      supportCount: "15,789 supporters"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-brand">VoiceUp India</h1>
            <div className="relative w-96">
              <input
                type="text"
                placeholder="Search for issues..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="bg-brand text-white px-6 py-2 rounded-lg hover:bg-brand-600">
              Raise Issue
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex space-x-6 overflow-x-auto no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                className="text-gray-600 hover:text-brand whitespace-nowrap px-4 py-2 rounded-full hover:bg-brand-50"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Issues List */}
          <div className="col-span-8">
            <h2 className="text-xl font-bold mb-6">Featured Issues</h2>
            <div className="space-y-6">
              {issues.map(issue => (
                <div key={issue.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  {issue.image && (
                    <img
                      src={issue.image}
                      alt={issue.title}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                  )}
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-brand-50 text-brand-700 text-sm font-medium px-3 py-1 rounded-full">
                        {issue.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{issue.title}</h3>
                    <p className="text-gray-600 mb-4">{issue.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6 text-gray-500">
                        <div className="flex items-center space-x-2">
                          <ThumbsUp className="w-5 h-5" />
                          <span>{issue.agreed.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <ThumbsDown className="w-5 h-5" />
                          <span>{issue.disagreed.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Share2 className="w-5 h-5" />
                          <span>{issue.shared.toLocaleString()}</span>
                        </div>
                      </div>
                      <button className="text-brand hover:text-brand-700 flex items-center">
                        View Details <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
                      <div className="flex items-center justify-between">
                        <span>Raised by {issue.author} · {issue.location}</span>
                        <span>{issue.timestamp}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Section */}
          <div className="col-span-4">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <div className="flex items-center space-x-2 mb-6">
                <TrendingUp className="w-5 h-5 text-brand" />
                <h2 className="text-xl font-bold">Trending Issues</h2>
              </div>
              <div className="space-y-4">
                {trendingIssues.map(issue => (
                  <div
                    key={issue.id}
                    className="p-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <h3 className="font-semibold mb-1">{issue.title}</h3>
                    <p className="text-sm text-brand">{issue.supportCount}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Home);
