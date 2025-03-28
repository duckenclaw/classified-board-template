
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllCategories } from "@/data/mockData";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const PostClassified = () => {
  const categories = getAllCategories();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Ad posted successfully!",
      description: "Your classified has been submitted and is pending review.",
      duration: 5000,
    });
    
    // In a real app, we would post to an API here
    // For now, just navigate back to home
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <Layout>
      <div className="container-custom py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Post a Classified Ad</h1>
          
          <Card>
            <CardHeader>
              <CardTitle>Ad Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="What are you selling?"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select required>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category.toLowerCase()}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="price">Price ($)</Label>
                    <Input
                      id="price"
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="0.00"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe what you're selling..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="City, State"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="images">Images</Label>
                    <Input
                      id="images"
                      type="file"
                      multiple
                      accept="image/*"
                      className="cursor-pointer"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      You can upload up to 5 images. First image will be the main image.
                    </p>
                  </div>
                  
                  <div>
                    <Label htmlFor="contact">Contact Information</Label>
                    <Input
                      id="contact"
                      placeholder="Email or phone number"
                      required
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full">
                  Post Classified
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PostClassified;
