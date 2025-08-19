import { BlogPost, Comment } from '../types';

// Sample comments for blog posts
const sampleComments: Comment[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    content: 'This was such an informative post! I learned a lot about this topic.',
    date: 'April 12, 2025',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    content: 'Great article! I especially liked the part about the future trends. Looking forward to more content like this.',
    date: 'April 11, 2025',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
  },
  {
    id: 3,
    name: 'Michael Chen',
    email: 'michael@example.com',
    content: 'I have a different perspective on this. I think the technology still needs more development before it becomes mainstream.',
    date: 'April 10, 2025',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
  }
];

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of AI in Everyday Life',
    excerpt: 'Artificial intelligence is rapidly transforming how we live and work. This article explores the most exciting developments on the horizon.',
    content: `Artificial intelligence has moved from science fiction to scientific reality. In recent years, we've seen AI make tremendous strides in capabilities and applications. From voice assistants to recommendation algorithms, AI is already woven into the fabric of our daily lives.

    But what does the future hold? As AI continues to evolve, we can expect to see even more profound changes in how we live, work, and interact with technology. In this article, we'll explore some of the most exciting developments on the horizon and consider their implications for society.

    One of the most promising areas for AI advancement is healthcare. AI-powered diagnostic tools are already helping doctors identify diseases earlier and with greater accuracy than ever before. Machine learning algorithms can detect patterns in medical images that might be missed by the human eye, potentially saving countless lives through early intervention.

    In the coming years, we'll likely see AI health assistants become more sophisticated, offering personalized health recommendations based on our unique genetic makeup, lifestyle factors, and medical history. These systems could help prevent diseases before they develop, ushering in a new era of preventative medicine.

    Transportation is another domain being revolutionized by AI. Self-driving cars, once a distant dream, are now being tested on public roads. While fully autonomous vehicles still face significant hurdles, the technology continues to improve rapidly. In the not-too-distant future, we might find ourselves in a world where car ownership is replaced by subscription services to fleets of self-driving vehicles, reducing traffic congestion and emissions while improving safety.

    Education is also poised for transformation. AI tutoring systems can adapt to individual learning styles, identifying where students struggle and adjusting instruction accordingly. This personalized approach could help close achievement gaps and make quality education more accessible to all.

    Despite these exciting possibilities, the AI revolution also raises important questions about privacy, security, and the future of work. As AI systems become more capable, certain jobs will inevitably be automated. While new opportunities will emerge, we need thoughtful policies to ensure that the benefits of AI are broadly shared.

    Moreover, as AI systems make more decisions that affect our lives, ensuring these systems are fair, transparent, and accountable becomes increasingly important. The challenge will be harnessing the potential of AI while mitigating its risks.

    In conclusion, the future of AI in everyday life is both exciting and challenging. By approaching these technologies with optimism tempered by careful consideration of their societal impacts, we can work toward a future where AI enhances human potential rather than diminishing it.`,
    author: 'Dr. Alex Rivera',
    publishedAt: 'April 15, 2025',
    readingTime: 8,
    coverImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    category: 'Technology',
    tags: ['AI', 'Future Tech', 'Innovation'],
    commentCount: 3,
    comments: sampleComments
  },
  {
    id: 2,
    title: 'Exploring the Hidden Beaches of Thailand',
    excerpt: 'Beyond the tourist hotspots lie Thailand\'s best-kept secrets. Discover pristine beaches that offer tranquility and natural beauty.',
    content: `Thailand is renowned for its stunning beaches and islands, attracting millions of tourists each year to popular destinations like Phuket, Koh Samui, and Krabi. However, beyond these well-trodden paths lie hidden gems waiting to be discovered – secluded beaches with crystal-clear waters, soft white sand, and a tranquility that's increasingly rare in today's world.

    In this article, we'll take you on a journey to some of Thailand's most beautiful hidden beaches, where you can escape the crowds and experience paradise in its purest form.

    Our first stop is Koh Kood (also spelled Koh Kut), located in the eastern Gulf of Thailand near the Cambodian border. Despite being Thailand's fourth-largest island, Koh Kood remains remarkably undeveloped. Beaches like Klong Chao and Ao Phrao offer postcard-perfect scenery without the usual beachfront bars and souvenir shops. The pristine waters are perfect for swimming and snorkeling, with healthy coral reefs teeming with marine life just offshore.

    Heading to southern Thailand, we find Koh Lipe's Sunset Beach (Pattaya Beach). While Koh Lipe has gained popularity in recent years, Sunset Beach remains relatively quiet compared to the island's main beaches. As the name suggests, this is the perfect spot to watch the sun dip below the horizon, painting the sky in spectacular hues of orange and pink.

    For the truly adventurous, Railay Beach in Krabi province offers a unique experience. Though not exactly unknown, Railay remains isolated from the mainland by towering limestone cliffs, accessible only by boat. The east side of Railay is less visited than the west, offering a more authentic experience with breathtaking views of the dramatic karst formations that make this region famous.

    Further north, in Phang Nga province, lies the hidden gem of Koh Phra Thong. This island feels like stepping back in time, with golden savannah-like landscapes that are unlike anywhere else in Thailand. The beaches here stretch for miles with barely another soul in sight, and the sunsets are simply magical.

    When visiting these hidden paradises, it's important to travel responsibly. Many of these locations have remained pristine precisely because they haven't been overwhelmed by tourism. Practice leave-no-trace principles, support local businesses, and be mindful of the environment and local communities.

    The best time to visit these hidden beaches is during the dry season (November to April), when the seas are calm and the weather is sunny. However, visiting during the shoulder seasons can offer a good balance between favorable weather and even fewer crowds.

    While these beaches may require more effort to reach than their famous counterparts, the reward is well worth it – a chance to experience Thailand's natural beauty in its unspoiled state, creating memories that will last a lifetime.`,
    author: 'Maya Wong',
    publishedAt: 'April 10, 2025',
    readingTime: 6,
    coverImage: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg',
    category: 'Travel',
    tags: ['Thailand', 'Beaches', 'Travel Tips'],
    commentCount: 2,
    comments: sampleComments.slice(0, 2)
  },
  {
    id: 3,
    title: 'The Art of Sourdough: Mastering Bread at Home',
    excerpt: 'The pandemic sparked a sourdough revolution. Learn how to create and maintain a thriving starter and bake perfect loaves every time.',
    content: `The pandemic sparked a sourdough revolution, with people around the world discovering the joy and satisfaction of baking bread from scratch. Unlike commercial breads made with instant yeast, sourdough relies on a living culture of wild yeasts and beneficial bacteria that not only leaven the bread but also develop complex flavors and improve digestibility.

    In this guide, we'll walk through the entire process of creating and maintaining a sourdough starter, preparing dough, and baking beautiful artisan loaves in your home kitchen.

    Creating a sourdough starter is simpler than you might think, though it does require patience. To begin, mix equal parts (by weight) of whole wheat flour and water in a glass jar. Cover loosely and let it sit at room temperature for 24 hours. The next day, discard half of the mixture and feed it with equal parts flour and water again. Repeat this process daily.

    After about 5-7 days, you should notice your starter becoming more active, with bubbles forming and a pleasant, tangy aroma developing. When it reliably doubles in size within 4-6 hours after feeding, your starter is ready to use.

    Once you have an active starter, you're ready to bake your first loaf. A basic sourdough recipe consists of flour, water, salt, and your starter. The process begins with creating a "levain" – a mixture of starter, flour, and water that ferments for several hours, boosting the yeast population before being added to the main dough.

    After mixing all ingredients, the dough undergoes a bulk fermentation, during which you'll perform a series of "stretch and folds" to develop gluten structure. This technique replaces traditional kneading and results in a more open crumb structure.

    Following bulk fermentation, the dough is shaped and placed in a proofing basket for its final rise. This is when patience becomes crucial – rushing this step will result in under-developed flavor and poor oven spring.

    When it comes to baking, professional results can be achieved at home using a Dutch oven, which creates the steamy environment necessary for a crackling crust. Preheating the Dutch oven is essential, as is scoring the dough before baking to control how it expands.

    Maintaining your starter for future bakes is straightforward. If you bake frequently, keep it at room temperature and feed it daily. For less frequent baking, store your starter in the refrigerator and feed it weekly.

    With practice, you'll develop intuition about how your dough should feel and look at each stage. You might encounter challenges like over-proofed dough or weak structure, but these are valuable learning experiences on your sourdough journey.

    The beauty of sourdough is that it connects us to traditional bread-making methods that have sustained humanity for thousands of years. As you master this craft, you'll not only enjoy incredible bread but also become part of a timeless culinary tradition.`,
    author: 'Thomas Baker',
    publishedAt: 'April 5, 2025',
    readingTime: 7,
    coverImage: 'https://images.pexels.com/photos/1756061/pexels-photo-1756061.jpeg',
    category: 'Food',
    tags: ['Baking', 'Sourdough', 'Recipes'],
    commentCount: 5,
    comments: [...sampleComments, {
      id: 4,
      name: 'Emma Wilson',
      email: 'emma@example.com',
      content: 'I tried this method and my bread turned out amazing! The crust was perfect.',
      date: 'April 8, 2025',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma'
    }, {
      id: 5,
      name: 'Robert Jones',
      email: 'robert@example.com',
      content: 'How long can I store the starter in the refrigerator before it needs to be refreshed?',
      date: 'April 7, 2025',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert'
    }]
  },
  {
    id: 4,
    title: 'Minimalism: Finding Freedom Through Living With Less',
    excerpt: 'Discover how embracing minimalism can reduce stress, increase productivity, and bring more joy to your everyday life.',
    content: `In a world of constant consumption and information overload, minimalism offers a refreshing alternative – a deliberate choice to live with less in order to make room for more of what truly matters. This philosophy extends beyond just decluttering physical spaces; it's about creating mental clarity and focusing on experiences rather than possessions.

    Minimalism isn't about deprivation or asceticism. Rather, it's about being intentional with your time, energy, and resources. By removing the excess, you can focus on the essential – the people, activities, and things that bring real value to your life.

    The benefits of embracing minimalism are numerous and far-reaching. Many who adopt minimalist principles report reduced stress and anxiety. When your space is free from clutter, your mind follows suit. There's a peace that comes from being surrounded only by items that serve a purpose or bring joy.

    Financial freedom is another significant advantage. By curbing unnecessary spending and focusing on quality over quantity, minimalists often find themselves saving more and working less. This creates opportunities to pursue passions, spend time with loved ones, or contribute to causes that align with personal values.

    Environmental impact shouldn't be overlooked either. Consuming less means producing less waste and using fewer resources, which benefits the planet we all share.

    If you're interested in exploring minimalism, start small. Begin by decluttering one area of your home, like a closet or a desk drawer. As you sort through items, ask yourself: "Does this add value to my life?" If the answer is no, consider donating, selling, or recycling it.

    Digital minimalism is equally important in today's connected world. Consider unsubscribing from email lists that don't serve you, unfollowing social media accounts that don't inspire you, and setting boundaries around technology use.

    Remember that minimalism looks different for everyone. A family of five will have a different version of minimalism than a single person living in a studio apartment. The goal isn't to live with as little as possible, but rather to live with just enough – whatever that means for you.

    Perhaps the most powerful aspect of minimalism is how it shifts your focus from what you own to who you are and what you do. Without the distraction of constant consumption, you have more time and energy to invest in relationships, personal growth, and meaningful experiences.

    In embracing minimalism, you're not just creating a more orderly physical environment; you're creating space for a more intentional and fulfilling life. And in a world that's constantly telling us we need more to be happy, there's something revolutionary about discovering that the opposite might be true.`,
    author: 'Claire Simmons',
    publishedAt: 'April 1, 2025',
    readingTime: 5,
    coverImage: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg',
    category: 'Lifestyle',
    tags: ['Minimalism', 'Decluttering', 'Intentional Living'],
    commentCount: 1,
    comments: [sampleComments[0]]
  },
  {
    id: 5,
    title: 'Web3 and the Future of the Internet',
    excerpt: 'Is Web3 the next evolution of the internet or just hype? Explore the potential and pitfalls of this decentralized vision.',
    content: `The internet has evolved dramatically since its inception. We've moved from static web pages (Web1) to interactive social platforms and cloud services (Web2). Now, a new paradigm called Web3 promises to fundamentally reshape our online experience through decentralization, blockchain technology, and user ownership.

    At its core, Web3 represents a shift from centralized platforms controlled by tech giants to decentralized networks owned by users. Instead of relying on companies like Google, Facebook, or Amazon to provide services in exchange for our data, Web3 envisions a digital landscape where users control their own data and digital assets.

    Blockchain technology serves as the foundation for this vision. By creating immutable, distributed ledgers, blockchains enable trustless interactions without centralized intermediaries. Smart contracts – self-executing code deployed on blockchains – automate agreements between parties, further reducing the need for traditional middlemen.

    Cryptocurrencies and tokens play a crucial role in the Web3 ecosystem, serving both as means of payment and as governance mechanisms. Through token ownership, users can participate in decision-making for protocols and platforms, creating new models of digital democracy.

    Non-fungible tokens (NFTs) represent another key innovation, enabling digital scarcity and verifiable ownership of digital assets – from artwork to virtual real estate. This creates new economic opportunities for creators and challenges traditional notions of digital property.

    Decentralized autonomous organizations (DAOs) take this concept further, creating internet-native entities governed entirely by token holders rather than traditional corporate structures. These organizations can coordinate resources, make decisions, and pursue objectives without centralized management.

    Proponents argue that Web3 will democratize the internet, returning power to users and enabling new forms of collaboration and value creation. By aligning economic incentives with network participation, Web3 platforms could create more equitable systems than today's attention economy.

    However, significant challenges remain. Scalability issues limit blockchain throughput, creating high transaction costs during periods of congestion. User experience often suffers from complexity, with seed phrases, gas fees, and technical jargon creating barriers to adoption. Regulatory uncertainty also looms large, as governments worldwide grapple with how to approach this transformative technology.

    Critics question whether true decentralization is achievable or even desirable for many applications. They point to the concentration of wealth in early cryptocurrency adopters and the tendency of supposedly decentralized systems to develop new forms of centralization over time.

    Despite these challenges, innovation in the Web3 space continues at a breathtaking pace. From decentralized finance (DeFi) to identity systems to social networks, entrepreneurs are exploring how blockchain-based architectures might improve upon existing digital services.

    Whether Web3 fulfills its revolutionary promise or becomes integrated into the existing internet landscape remains to be seen. What's clear is that these technologies have introduced powerful new concepts and tools that will influence how we build and interact with digital systems for years to come.`,
    author: 'Marcus Chen',
    publishedAt: 'March 28, 2025',
    readingTime: 9,
    coverImage: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg',
    category: 'Technology',
    tags: ['Web3', 'Blockchain', 'Cryptocurrency'],
    commentCount: 0,
    comments: []
  }
];

// Function to get all blog posts
export const getAllPosts = (): Promise<BlogPost[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(blogPosts);
    }, 500);
  });
};

// Function to get a single blog post by ID
export const getPostById = (id: number): Promise<BlogPost> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = blogPosts.find(post => post.id === id);
      if (post) {
        resolve(post);
      } else {
        reject(new Error(`Post with ID ${id} not found`));
      }
    }, 500);
  });
};

// Function to get posts by category
export const getPostsByCategory = (category: string): Promise<BlogPost[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredPosts = blogPosts.filter(
        post => post.category.toLowerCase() === category.toLowerCase()
      );
      resolve(filteredPosts);
    }, 500);
  });
};

// Function to get related posts (excluding the current post)
export const getRelatedPosts = (currentPostId: number, category: string): Promise<BlogPost[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const relatedPosts = blogPosts
        .filter(post => post.category === category && post.id !== currentPostId)
        .slice(0, 3);
      resolve(relatedPosts);
    }, 500);
  });
};

// Function to search posts
export const searchPosts = (query: string): Promise<BlogPost[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const normalizedQuery = query.toLowerCase();
      const results = blogPosts.filter(post => 
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.content.toLowerCase().includes(normalizedQuery) ||
        post.excerpt.toLowerCase().includes(normalizedQuery) ||
        post.category.toLowerCase().includes(normalizedQuery) ||
        (post.tags && post.tags.some(tag => tag.toLowerCase().includes(normalizedQuery)))
      );
      resolve(results);
    }, 500);
  });
};