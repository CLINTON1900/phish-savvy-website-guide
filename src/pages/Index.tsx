
import { useState } from 'react';
import { Shield, Eye, AlertTriangle, Check, Info, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [currentTip, setCurrentTip] = useState(0);

  const phishingTypes = [
    {
      title: "Email Phishing",
      description: "Fake emails that appear to be from legitimate sources",
      example: "You receive an email claiming to be from your bank asking you to verify your account",
      warning: "Always check the sender's email address carefully"
    },
    {
      title: "SMS Phishing (Smishing)",
      description: "Fraudulent text messages with malicious links",
      example: "Text saying you won a prize and need to click a link to claim it",
      warning: "Banks and legitimate companies rarely ask for personal info via text"
    },
    {
      title: "Voice Phishing (Vishing)",
      description: "Phone calls from scammers impersonating trusted organizations",
      example: "Caller claims to be from tech support and needs remote access to your computer",
      warning: "Never give personal information or computer access to unsolicited callers"
    },
    {
      title: "Website Phishing",
      description: "Fake websites that look like legitimate ones",
      example: "A fake banking website with a slightly different URL",
      warning: "Always check the URL carefully and look for HTTPS"
    }
  ];

  const redFlags = [
    "Urgent or threatening language",
    "Requests for personal information",
    "Suspicious email addresses",
    "Poor grammar and spelling",
    "Generic greetings",
    "Unexpected attachments",
    "Too good to be true offers",
    "Mismatched URLs"
  ];

  const preventionTips = [
    "Verify sender identity through separate communication",
    "Never click suspicious links - type URLs manually",
    "Keep software and browsers updated",
    "Use two-factor authentication",
    "Be cautious with personal information sharing",
    "Check website security certificates",
    "Use reputable antivirus software",
    "Trust your instincts - if something feels wrong, it probably is"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">PhishGuard</h1>
            </div>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Stay Safe Online
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Protect Yourself from Phishing Attacks
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Learn to identify, understand, and prevent phishing attempts with our comprehensive guide
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6 text-center">
                <Eye className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Identify</h3>
                <p className="text-sm text-gray-600">Learn to spot phishing attempts</p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Prevent</h3>
                <p className="text-sm text-gray-600">Protect yourself and your data</p>
              </CardContent>
            </Card>
            <Card className="bg-orange-50 border-orange-200">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Report</h3>
                <p className="text-sm text-gray-600">Know what to do if attacked</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What is Phishing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Phishing?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Phishing is a cybercrime where attackers impersonate legitimate organizations to steal sensitive information like usernames, passwords, credit card details, and other personal data.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Alert className="mb-6 border-red-200 bg-red-50">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  <strong>Did you know?</strong> 3.4 billion phishing emails are sent every day, and 1 in 99 emails is a phishing attack.
                </AlertDescription>
              </Alert>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">How Phishing Works:</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">Attackers create fake communications that appear legitimate</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">They trick you into clicking malicious links or downloading files</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">Your sensitive information is stolen and misused</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop" 
                alt="Computer security concept" 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-sm text-gray-600 text-center">Stay vigilant while browsing and checking emails</p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Phishing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Phishing Attacks</h2>
            <p className="text-lg text-gray-600">Understanding different phishing methods helps you stay protected</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {phishingTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    <span>{type.title}</span>
                  </CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <p className="text-sm text-yellow-800"><strong>Example:</strong> {type.example}</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-sm text-green-800"><strong>Prevention:</strong> {type.warning}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Red Flags and Prevention */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="red-flags" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="red-flags" className="flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4" />
                <span>Red Flags</span>
              </TabsTrigger>
              <TabsTrigger value="prevention" className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Prevention Tips</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="red-flags">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">🚩 Warning Signs to Watch For</h2>
                <p className="text-lg text-gray-600">Learn to identify these common phishing red flags</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {redFlags.map((flag, index) => (
                  <Card key={index} className="bg-red-50 border-red-200 hover:bg-red-100 transition-colors">
                    <CardContent className="p-4 text-center">
                      <AlertTriangle className="h-6 w-6 text-red-600 mx-auto mb-2" />
                      <p className="text-sm font-medium text-red-800">{flag}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="prevention">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">🛡️ How to Protect Yourself</h2>
                <p className="text-lg text-gray-600">Follow these best practices to stay safe</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {preventionTips.map((tip, index) => (
                  <Card key={index} className="bg-green-50 border-green-200 hover:bg-green-100 transition-colors">
                    <CardContent className="p-4 flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm font-medium text-green-800">{tip}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Interactive Example */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📧 Spot the Phishing Email</h2>
            <p className="text-lg text-gray-600">Can you identify what's wrong with this email?</p>
          </div>

          <Card className="bg-white shadow-xl">
            <CardHeader className="bg-gray-100 border-b">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>From: security@amaz0n-support.com</span>
                <Badge variant="destructive" className="text-xs">🚩 Suspicious</Badge>
              </div>
              <CardTitle className="text-lg">Urgent: Your Account Will Be Suspended!</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-gray-800">Dear Valued Customer,</p>
                <p className="text-gray-800">
                  We have detected unusual activity on your account. Your account will be suspended in 24 hours unless you verify your information immediately.
                </p>
                <p className="text-gray-800">
                  Click here to verify your account: 
                  <span className="text-blue-600 underline ml-1">http://amaz0n-verify.suspicious-site.com</span>
                  <Badge variant="destructive" className="ml-2 text-xs">🚩 Fake URL</Badge>
                </p>
                <p className="text-gray-800">
                  Please provide your login credentials, social security number, and credit card information to verify your identity.
                  <Badge variant="destructive" className="ml-2 text-xs">🚩 Too much info requested</Badge>
                </p>
                <p className="text-gray-800">Best regards,<br />Amazon Security Team</p>
              </div>
              
              <Alert className="mt-6 border-red-200 bg-red-50">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  <strong>This is a phishing email!</strong> Notice the misspelled domain, urgent language, suspicious URL, and requests for sensitive information.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Action Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What to Do If You Encounter Phishing</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="p-6">
                <AlertTriangle className="h-8 w-8 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Don't Panic</h3>
                <p className="text-sm text-gray-700">Stay calm and don't click any links or download attachments</p>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <Info className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Report It</h3>
                <p className="text-sm text-gray-700">Forward phishing emails to your IT department or relevant authorities</p>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Verify</h3>
                <p className="text-sm text-gray-700">Contact the organization directly through official channels</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Shield className="h-6 w-6" />
            <span className="text-xl font-bold">PhishGuard</span>
          </div>
          <p className="text-gray-400 mb-4">Stay informed, stay protected. Your cybersecurity matters.</p>
          <p className="text-sm text-gray-500">
            Remember: When in doubt, don't click. Always verify through official channels.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
