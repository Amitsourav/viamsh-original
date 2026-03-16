/* ─── Blog Types & Data ─── */

export type BlogCategory = 'All' | 'Cleaning Tips' | 'Product Guides' | 'Home Care' | 'Sustainability' | 'Company News';

export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: Exclude<BlogCategory, 'All'>;
  date: string;
  readTime: string;
  author: Author;
  tags: string[];
  featured?: boolean;
  trending?: boolean;
  coverGradient: [string, string];
  content: string; // markdown-like HTML content
}

export const authors: Record<string, Author> = {
  priya: { name: 'Priya Sharma', role: 'Home Care Expert', avatar: 'PS' },
  rahul: { name: 'Rahul Verma', role: 'Product Specialist', avatar: 'RV' },
  anita: { name: 'Anita Das', role: 'Sustainability Lead', avatar: 'AD' },
  viamsh: { name: 'Viamsh Team', role: 'Company Updates', avatar: 'VT' },
};

export const categoryConfig: Record<Exclude<BlogCategory, 'All'>, { color: string; bg: string }> = {
  'Cleaning Tips': { color: 'text-[#2563EB]', bg: 'bg-[#EFF6FF]' },
  'Product Guides': { color: 'text-[#6366F1]', bg: 'bg-[#EEF2FF]' },
  'Home Care': { color: 'text-[#059669]', bg: 'bg-[#ECFDF5]' },
  'Sustainability': { color: 'text-[#16A34A]', bg: 'bg-[#F0FDF4]' },
  'Company News': { color: 'text-[#D97706]', bg: 'bg-[#FFFBEB]' },
};

export const categories: BlogCategory[] = ['All', 'Cleaning Tips', 'Product Guides', 'Home Care', 'Sustainability', 'Company News'];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '5 Tips for Removing Tough Stains from White Clothes',
    slug: '5-tips-removing-tough-stains',
    excerpt:
      'Discover proven methods to tackle stubborn stains on white fabrics using Orma Detergent Powder and simple household ingredients. From turmeric to grease — we cover them all.',
    category: 'Cleaning Tips',
    date: '2026-03-10',
    readTime: '4 min',
    author: authors.priya,
    tags: ['stain removal', 'white clothes', 'laundry'],
    featured: true,
    coverGradient: ['#6366F1', '#8B5CF6'],
    content: `
<p>White clothes are wardrobe essentials, but keeping them pristine can feel like a constant battle. Whether it's a turmeric splatter from cooking or a coffee spill during your morning commute, stains on white fabric are painfully visible.</p>

<p>After testing dozens of methods in our lab and with real households across Jharkhand, here are the 5 most effective techniques for removing tough stains from white clothes.</p>

<h2>1. Pre-Treat with Orma Detergent Paste</h2>
<p>The most effective first step for any stain is creating a concentrated paste. Mix Orma Detergent Powder with a few drops of water to form a thick paste. Apply it directly to the stain and let it sit for 15-20 minutes before washing. The concentrated surfactants in Orma break down the stain molecules at a deeper level than simply adding detergent to the wash cycle.</p>
<p>This works exceptionally well for <strong>food stains, grease marks, and sweat yellowing</strong>.</p>

<h2>2. The Lemon + Sunlight Method for Turmeric</h2>
<p>Turmeric stains are notoriously stubborn — the curcumin pigment bonds tightly to fabric fibres. Here's the trick: squeeze fresh lemon juice onto the stain, then place the garment in direct sunlight for 2-3 hours. The UV rays from sunlight break down curcumin, and the citric acid from lemon accelerates the process.</p>
<p>After sun exposure, wash normally with Orma Detergent Powder. The stain will have faded significantly or disappeared entirely.</p>

<h2>3. Baking Soda Soak for Sweat Stains</h2>
<p>Those yellowish marks around collars and underarms are caused by a reaction between sweat proteins and aluminium in deodorants. To remove them:</p>
<ul>
<li>Mix 4 tablespoons of baking soda with 1/4 cup warm water</li>
<li>Apply the paste to the yellow areas</li>
<li>Let it sit for 1 hour</li>
<li>Wash with Orma Detergent Powder in warm water</li>
</ul>
<p>For severe yellowing, add a tablespoon of white vinegar to the paste before applying.</p>

<h2>4. Cold Water First for Blood Stains</h2>
<p><strong>Never use hot water on blood stains</strong> — heat causes the proteins in blood to set permanently into the fabric. Instead:</p>
<ul>
<li>Rinse immediately under cold running water</li>
<li>Apply Orma Detergent Powder directly to the wet stain</li>
<li>Gently rub the fabric together</li>
<li>Soak in cold water with a scoop of Orma for 30 minutes</li>
<li>Wash as normal</li>
</ul>
<p>The sooner you treat a blood stain, the easier it comes out. Even dried blood stains can be removed by soaking overnight in cold water with detergent.</p>

<h2>5. White Vinegar for Coffee & Tea Stains</h2>
<p>Coffee and tea contain tannins that bind to fabric quickly. For fresh stains, blot (don't rub!) with a cloth, then apply a solution of equal parts white vinegar and water. After 10 minutes, wash with Orma Detergent Powder.</p>
<p>For older, set-in stains, soak the garment in a mixture of warm water, a scoop of Orma, and 1/2 cup of white vinegar for 2 hours before washing.</p>

<h2>Bonus: Prevention Tips</h2>
<ul>
<li>Wash white clothes separately from coloured garments — always</li>
<li>Don't overload your washing machine; clothes need room to agitate</li>
<li>Use the right amount of detergent — more isn't always better</li>
<li>Dry white clothes in sunlight when possible; UV is a natural whitener</li>
</ul>

<p>With these techniques and Orma Detergent Powder, your white clothes can stay bright and stain-free, wash after wash. The key is acting quickly and using the right method for each type of stain.</p>
`,
  },
  {
    id: '2',
    title: 'How to Choose the Right Detergent for Your Washing Machine',
    slug: 'choose-right-detergent-washing-machine',
    excerpt:
      'Not all detergents are created equal. Learn how to pick the best detergent for front-load and top-load washing machines for optimal cleaning results.',
    category: 'Product Guides',
    date: '2026-03-05',
    readTime: '5 min',
    author: authors.rahul,
    tags: ['washing machine', 'detergent', 'guide'],
    trending: true,
    coverGradient: ['#059669', '#34D399'],
    content: `
<p>With so many detergent options available — powder, liquid, pods, front-load specific, top-load specific — choosing the right one can be overwhelming. Using the wrong detergent can lead to poor cleaning, residue buildup, and even damage to your machine.</p>

<p>Here's a comprehensive guide to help you make the right choice.</p>

<h2>Front-Load vs Top-Load: Why It Matters</h2>
<p>Front-load washing machines use less water and tumble clothes gently. They require <strong>low-suds (HE) detergents</strong> because excessive foam can interfere with the tumbling action and even damage the machine over time.</p>
<p>Top-load machines use more water and agitate vigorously. They can handle regular detergents with higher suds. However, using an HE detergent in a top-load machine is perfectly fine — it just means less foam.</p>

<h2>Powder vs Liquid Detergent</h2>
<p><strong>Powder detergents</strong> like Orma Detergent Powder are generally more effective at removing ground-in dirt and mud stains. They're also more economical per wash and have a longer shelf life. Powder is the preferred choice for most Indian households, especially for heavily soiled clothes.</p>
<p><strong>Liquid detergents</strong> dissolve faster in cold water and are better for pre-treating stains. They leave less residue on dark clothes. However, they typically cost more per wash.</p>

<h2>Key Factors to Consider</h2>

<h3>Water Hardness</h3>
<p>If you live in an area with hard water (common across Jharkhand, Bihar, and much of Eastern India), choose a detergent with built-in water softeners. Orma Detergent Powder is formulated to work effectively in both hard and soft water conditions.</p>

<h3>Fabric Types</h3>
<p>For everyday cotton and polyester blends, a standard detergent works well. For delicate fabrics like silk, wool, or lace, look for detergents labelled "gentle" or "delicate" — or use less detergent and the gentle cycle.</p>

<h3>Skin Sensitivity</h3>
<p>If anyone in your household has sensitive skin or allergies, opt for detergents that are dermatologically tested and free from harsh dyes and fragrances.</p>

<h2>How Much Detergent Should You Use?</h2>
<p>More detergent doesn't mean cleaner clothes. In fact, using too much can:</p>
<ul>
<li>Leave residue that traps bacteria and causes odour</li>
<li>Make clothes feel stiff and scratchy</li>
<li>Create excessive suds that prevent proper rinsing</li>
<li>Build up inside your machine, leading to mold</li>
</ul>
<p>Follow the dosage instructions on the packaging. For Orma Detergent Powder, one scoop (approximately 30g) is enough for a standard 6kg load.</p>

<h2>Our Recommendation</h2>
<p>For most Indian households, a quality powder detergent that works in all water types and machine types is the best all-round choice. Orma Detergent Powder is designed to deliver excellent cleaning across all these scenarios — from hand-washing to fully automatic machines.</p>
`,
  },
  {
    id: '3',
    title: 'The Complete Guide to Eco-Friendly Cleaning in 2026',
    slug: 'eco-friendly-cleaning-guide-2026',
    excerpt:
      'Small changes in your cleaning routine can make a big difference. Here are practical, science-backed tips for environmentally conscious cleaning without compromising on results.',
    category: 'Sustainability',
    date: '2026-02-28',
    readTime: '7 min',
    author: authors.anita,
    tags: ['eco-friendly', 'green cleaning', 'sustainability'],
    trending: true,
    coverGradient: ['#16A34A', '#86EFAC'],
    content: `
<p>The cleaning products industry generates millions of tonnes of chemical waste annually. But you don't have to choose between a clean home and a clean planet. Here's how to make your cleaning routine more sustainable without sacrificing effectiveness.</p>

<h2>Why Eco-Friendly Cleaning Matters</h2>
<p>Traditional cleaning products often contain phosphates, synthetic fragrances, chlorine bleach, and other chemicals that end up in our waterways. In Eastern India, where many communities rely on river water, this is especially concerning.</p>
<p>The good news? Eco-friendly cleaning has come a long way. Modern formulations — including ours at Viamsh — prove you can clean effectively with a lighter environmental footprint.</p>

<h2>5 Simple Swaps for a Greener Home</h2>

<h3>1. Use Concentrated Detergents</h3>
<p>Concentrated formulas mean less packaging, less water in transport, and less product per wash. Orma Detergent Powder is concentrated — you only need one scoop per load, reducing both waste and cost.</p>

<h3>2. Wash in Cold Water</h3>
<p>About 90% of the energy used in a washing machine cycle goes to heating water. Washing in cold water can reduce your laundry carbon footprint by up to 75%. Modern detergents like Orma are designed to work effectively in cold water.</p>

<h3>3. Replace Paper Towels with Microfibre Cloths</h3>
<p>A single microfibre cloth can replace hundreds of paper towels. They're washable, reusable, and actually clean surfaces more effectively because of their microscopic fibres that trap dust and bacteria.</p>

<h3>4. Make Your Own All-Purpose Cleaner</h3>
<p>For general surface cleaning, mix equal parts white vinegar and water in a spray bottle. Add a few drops of essential oil (lemon or tea tree) for fragrance and extra antibacterial properties. This works on countertops, tiles, and glass.</p>

<h3>5. Choose Biodegradable Products</h3>
<p>Look for detergents and cleaners that are biodegradable — meaning they break down naturally without harming ecosystems. Check for certifications and ingredient transparency on the label.</p>

<h2>The Viamsh Sustainability Commitment</h2>
<p>At Viamsh FMCG, sustainability isn't just a marketing word. We're actively working on:</p>
<ul>
<li>Biodegradable packaging by 2027</li>
<li>Reducing water usage in manufacturing by 30%</li>
<li>Sourcing raw materials from certified sustainable suppliers</li>
<li>Community clean-up drives across Jharkhand</li>
</ul>

<p>Every small change in your cleaning routine adds up. Start with one swap this week, and build from there. Your home can be spotless and sustainable at the same time.</p>
`,
  },
  {
    id: '4',
    title: 'Viamsh FMCG Expands Distribution to 5 New States',
    slug: 'viamsh-expands-5-new-states',
    excerpt:
      'We are thrilled to announce the expansion of our distribution network to Maharashtra, Gujarat, Madhya Pradesh, Uttar Pradesh, and West Bengal.',
    category: 'Company News',
    date: '2026-02-20',
    readTime: '3 min',
    author: authors.viamsh,
    tags: ['expansion', 'distribution', 'growth'],
    coverGradient: ['#F59E0B', '#FCD34D'],
    content: `
<p>We're excited to announce a major milestone in our growth journey. Starting March 2026, Viamsh FMCG products will be available through authorized distributors in five new states: <strong>Maharashtra, Gujarat, Madhya Pradesh, Uttar Pradesh, and West Bengal</strong>.</p>

<h2>Growing Beyond Jharkhand</h2>
<p>What started as a dream in Ranchi has now become a pan-India reality. Since our founding, we've built a loyal customer base across Jharkhand, Bihar, and Odisha. The overwhelming demand from neighbouring states made this expansion a natural next step.</p>

<h2>What This Means for You</h2>
<p>If you're in any of these five states, you'll soon find Orma Detergent Powder and our other products at local retail shops, supermarkets, and online marketplaces. We're setting up distribution hubs in:</p>
<ul>
<li><strong>Mumbai & Pune</strong> — for Maharashtra</li>
<li><strong>Ahmedabad</strong> — for Gujarat</li>
<li><strong>Bhopal & Indore</strong> — for Madhya Pradesh</li>
<li><strong>Lucknow & Varanasi</strong> — for Uttar Pradesh</li>
<li><strong>Kolkata</strong> — for West Bengal</li>
</ul>

<h2>Become a Distributor</h2>
<p>We're actively looking for distribution partners in these new territories. If you're interested in joining the Viamsh family, visit our Distributors page to apply. Early partners get exclusive territory rights and premium margins of 18-22%.</p>

<h2>Our Vision</h2>
<p>By the end of 2027, our goal is to be present in every state across India. This expansion is just the beginning. We remain committed to our core values — quality products, fair pricing, and strong partnerships.</p>

<p>Thank you to every customer, distributor, and team member who made this possible. Here's to building something great together.</p>
`,
  },
  {
    id: '5',
    title: 'The Science Behind Orma Detergent: How It Keeps Clothes Brighter',
    slug: 'science-behind-orma-detergent',
    excerpt:
      'A deep dive into the optical brighteners and surfactants that make Orma Detergent Powder so effective at keeping fabrics looking new, wash after wash.',
    category: 'Product Guides',
    date: '2026-02-15',
    readTime: '6 min',
    author: authors.rahul,
    tags: ['orma', 'science', 'brighteners'],
    coverGradient: ['#7C3AED', '#A78BFA'],
    content: `
<p>Ever wondered why some detergents make your clothes look brighter while others leave them dull? The answer lies in the science of cleaning — surfactants, enzymes, optical brighteners, and pH balance all play critical roles.</p>

<h2>How Detergent Actually Cleans</h2>
<p>At its core, cleaning is about breaking the bond between dirt and fabric. Surfactants (surface-active agents) are the key players. Each surfactant molecule has two ends:</p>
<ul>
<li><strong>Hydrophilic end</strong> — attracted to water</li>
<li><strong>Hydrophobic end</strong> — attracted to oil and dirt</li>
</ul>
<p>When you add detergent to water, surfactant molecules surround dirt particles, pull them away from the fabric, and suspend them in the water so they can be rinsed away.</p>

<h2>What Makes Orma Different</h2>

<h3>Advanced Surfactant Blend</h3>
<p>Orma Detergent Powder uses a proprietary blend of anionic and non-ionic surfactants that work together for superior cleaning. The anionic surfactants handle heavy-duty soil removal, while the non-ionic surfactants excel at removing greasy stains — even in cold water.</p>

<h3>Optical Brighteners</h3>
<p>These are fascinating molecules that absorb invisible ultraviolet light and re-emit it as visible blue light. This blue light counteracts the natural yellowing of fabrics, making clothes appear whiter and brighter. It's not a coating or a trick — it's real science that enhances how light reflects off your clothes.</p>

<h3>Enzyme Technology</h3>
<p>Orma contains protease and amylase enzymes that target specific types of stains:</p>
<ul>
<li><strong>Protease</strong> breaks down protein-based stains (blood, grass, food)</li>
<li><strong>Amylase</strong> breaks down starch-based stains (rice, pasta, chocolate)</li>
</ul>
<p>These enzymes work at lower temperatures, which is why Orma is effective even in cold water washes.</p>

<h3>Hard Water Performance</h3>
<p>Hard water contains calcium and magnesium ions that can interfere with cleaning. Orma includes chelating agents (water softeners) that bind to these minerals, preventing them from reducing the detergent's effectiveness. This is especially important in Eastern India where hard water is common.</p>

<h2>The Result</h2>
<p>The combination of advanced surfactants, optical brighteners, targeted enzymes, and water-softening agents means Orma delivers consistently bright, clean results — regardless of your water type, machine type, or the kind of stain you're dealing with.</p>
`,
  },
  {
    id: '6',
    title: '10 Common Laundry Mistakes You\'re Probably Making',
    slug: '10-common-laundry-mistakes',
    excerpt:
      'From overloading the machine to using too much detergent — these everyday mistakes could be damaging your clothes. Here\'s how to fix them.',
    category: 'Cleaning Tips',
    date: '2026-02-10',
    readTime: '5 min',
    author: authors.priya,
    tags: ['laundry', 'mistakes', 'tips'],
    trending: true,
    coverGradient: ['#DC2626', '#FCA5A5'],
    content: `
<p>Doing laundry seems straightforward, but most of us have picked up habits that actually harm our clothes. Here are 10 common mistakes and how to fix them.</p>

<h2>1. Using Too Much Detergent</h2>
<p>More detergent does not mean cleaner clothes. Excess detergent creates a residue that traps bacteria and makes fabric stiff. Follow the recommended dosage — for Orma, one scoop per standard load is enough.</p>

<h2>2. Overloading the Machine</h2>
<p>Clothes need room to move and agitate for proper cleaning. Filling the drum beyond 75% capacity means clothes won't get clean, and your machine works harder, wearing out faster.</p>

<h2>3. Not Sorting by Colour</h2>
<p>We've all been guilty of throwing everything in together. But washing dark jeans with white shirts is a recipe for dingy whites. Sort into whites, darks, and colours at minimum.</p>

<h2>4. Ignoring Care Labels</h2>
<p>Those tiny symbols on clothing tags exist for a reason. Washing a "dry clean only" silk blouse in hot water will ruin it. Take 5 seconds to check the label before tossing it in.</p>

<h2>5. Washing in Hot Water by Default</h2>
<p>Hot water is only necessary for heavily soiled items, towels, and bedsheets. For everyday clothes, cold or warm water is sufficient and causes less colour fading and shrinkage.</p>

<h2>6. Not Treating Stains Immediately</h2>
<p>The longer a stain sits, the harder it becomes to remove. Blot (don't rub) fresh stains immediately and pre-treat with detergent paste before washing.</p>

<h2>7. Leaving Clothes in the Machine After Washing</h2>
<p>Damp clothes left in the machine for hours develop a musty smell caused by mildew. Transfer to the dryer or clothesline within 30 minutes of the cycle ending.</p>

<h2>8. Zipping Up but Not Buttoning</h2>
<p>Open zippers can snag other garments, while unbuttoned shirts can stretch and lose shape. Zip up zippers and unbutton buttons before washing.</p>

<h2>9. Skipping Machine Maintenance</h2>
<p>Run an empty hot water cycle with a cup of white vinegar once a month to clean out detergent buildup, mold, and odours from your washing machine.</p>

<h2>10. Drying Everything on High Heat</h2>
<p>High heat causes shrinkage, fading, and weakens fabric fibres over time. Use medium or low heat for most items. Better yet, air-dry when possible — it's free and gentler on clothes.</p>

<p>Fix these 10 habits and you'll notice your clothes lasting longer, looking better, and smelling fresher. Small changes, big difference.</p>
`,
  },
  {
    id: '7',
    title: 'How to Keep Your Bathroom Sparkling Clean with Less Effort',
    slug: 'bathroom-cleaning-less-effort',
    excerpt:
      'A step-by-step routine that takes just 15 minutes a day to maintain a spotless bathroom. Plus, the best products for different surfaces.',
    category: 'Home Care',
    date: '2026-02-05',
    readTime: '4 min',
    author: authors.priya,
    tags: ['bathroom', 'cleaning routine', 'home care'],
    coverGradient: ['#0EA5E9', '#7DD3FC'],
    content: `
<p>The bathroom is often the most dreaded room to clean. But with a smart daily routine, you can keep it sparkling without dedicating entire weekends to scrubbing. Here's a 15-minute daily system that works.</p>

<h2>The 15-Minute Daily Routine</h2>

<h3>After Your Shower (2 minutes)</h3>
<p>Keep a squeegee in the shower. After every use, quickly wipe down the glass doors and tiles. This prevents 90% of water spots and soap scum buildup. It takes 30 seconds and saves hours of scrubbing later.</p>

<h3>Quick Wipe-Down (5 minutes)</h3>
<p>Keep a microfibre cloth and an all-purpose cleaner under the sink. Once a day, quickly wipe the sink, faucet, counter, and mirror. This prevents toothpaste splatters and soap residue from hardening.</p>

<h3>Toilet Swish (3 minutes)</h3>
<p>A quick swirl with the toilet brush once daily prevents ring buildup. Spray the seat and exterior with cleaner and wipe down.</p>

<h3>Floor Spot-Check (5 minutes)</h3>
<p>Sweep or mop the floor quickly, focusing on corners and behind the toilet where dust and hair accumulate.</p>

<h2>Weekly Deep Clean Tasks</h2>
<ul>
<li>Scrub grout lines with a baking soda paste and old toothbrush</li>
<li>Clean inside the toilet bowl with a dedicated cleaner</li>
<li>Wash bath mats and towels in hot water</li>
<li>Wipe down all surfaces with a disinfectant</li>
<li>Clean the exhaust fan to prevent mold</li>
</ul>

<h2>Products for Different Surfaces</h2>
<p><strong>Glass & Mirrors:</strong> White vinegar + water solution. Streak-free and chemical-free.</p>
<p><strong>Tiles & Grout:</strong> Baking soda paste for gentle abrasion. For tough stains, use a dedicated bathroom cleaner.</p>
<p><strong>Chrome Fixtures:</strong> Microfibre cloth with a drop of dish soap. Buff dry for a streak-free shine.</p>
<p><strong>Toilet:</strong> Dedicated toilet cleaner for inside the bowl. All-purpose cleaner for the exterior.</p>

<p>Consistency beats intensity. A few minutes daily is far more effective than a marathon cleaning session once a month. Your future self will thank you.</p>
`,
  },
  {
    id: '8',
    title: 'Viamsh FMCG Receives ISO 9001:2015 Certification',
    slug: 'viamsh-iso-certification',
    excerpt:
      'Our commitment to quality has been recognized with the prestigious ISO 9001:2015 certification for our manufacturing processes in Ranchi.',
    category: 'Company News',
    date: '2026-01-28',
    readTime: '3 min',
    author: authors.viamsh,
    tags: ['certification', 'quality', 'ISO'],
    coverGradient: ['#0F172A', '#475569'],
    content: `
<p>We're proud to announce that Viamsh FMCG Pvt. Ltd. has been awarded the <strong>ISO 9001:2015 certification</strong> for our manufacturing facility in Ranchi, Jharkhand. This internationally recognized standard validates our commitment to quality management and continuous improvement.</p>

<h2>What ISO 9001:2015 Means</h2>
<p>ISO 9001:2015 is the international standard for Quality Management Systems (QMS). It sets the criteria for a systematic approach to managing processes and ensuring that products consistently meet customer and regulatory requirements.</p>
<p>Achieving this certification means our manufacturing processes, quality control procedures, supply chain management, and customer service protocols have all been independently audited and approved.</p>

<h2>What This Means for Our Customers</h2>
<ul>
<li><strong>Consistent Quality:</strong> Every batch of Orma Detergent Powder meets the same high standard</li>
<li><strong>Traceability:</strong> We can track every product from raw material to your doorstep</li>
<li><strong>Continuous Improvement:</strong> We're committed to regularly reviewing and improving our processes</li>
<li><strong>Customer Focus:</strong> Your feedback directly drives our quality improvements</li>
</ul>

<h2>What This Means for Our Distributors</h2>
<p>For our distribution partners, this certification provides additional confidence in the products you're selling. It's a trust signal that helps you build credibility with retailers and consumers in your territory.</p>

<h2>The Journey Ahead</h2>
<p>ISO 9001:2015 is just the beginning. We're already working towards additional certifications including BIS (Bureau of Indian Standards) for specific product categories. Quality isn't a destination — it's an ongoing commitment.</p>

<p>Thank you to our entire team in Ranchi whose dedication made this achievement possible.</p>
`,
  },
  {
    id: '9',
    title: 'Understanding Fabric Types: Which Detergent Works Best?',
    slug: 'fabric-types-detergent-guide',
    excerpt:
      'Cotton, silk, polyester, wool — each fabric has different needs. Learn which detergent type and wash settings work best for every material.',
    category: 'Product Guides',
    date: '2026-01-20',
    readTime: '6 min',
    author: authors.rahul,
    tags: ['fabric', 'detergent', 'guide'],
    coverGradient: ['#D946EF', '#F0ABFC'],
    content: `
<p>Not all fabrics are created equal, and using the same wash settings for everything is a surefire way to damage your clothes. Here's a fabric-by-fabric guide to getting the best results.</p>

<h2>Cotton</h2>
<p>Cotton is the most common fabric and the easiest to care for. It can handle warm or hot water and regular detergent. Use Orma Detergent Powder on a normal cycle for everyday cotton items. For white cotton, you can use hot water for extra whitening power.</p>
<p><strong>Tip:</strong> Cotton tends to shrink in hot water. If shrinkage is a concern, stick to warm or cold water.</p>

<h2>Polyester & Synthetic Blends</h2>
<p>Polyester is durable and wrinkle-resistant but tends to trap odours. Wash in warm water with regular detergent. Adding half a cup of white vinegar to the rinse cycle helps eliminate trapped smells.</p>
<p><strong>Tip:</strong> Turn synthetic garments inside out to reduce pilling.</p>

<h2>Silk</h2>
<p>Silk is delicate and requires gentle handling. Ideally, hand-wash in cold water with a very small amount of mild detergent. If using a machine, place silk items in a mesh laundry bag and use the delicate cycle.</p>
<p><strong>Tip:</strong> Never wring silk. Roll it in a towel to absorb excess water, then lay flat to dry.</p>

<h2>Wool</h2>
<p>Wool fibres can shrink and felt if exposed to heat or agitation. Wash in cold water on the gentlest cycle available, or hand-wash. Use minimal detergent.</p>
<p><strong>Tip:</strong> Reshape wool garments while damp and lay flat to dry. Never hang wet wool — it stretches.</p>

<h2>Linen</h2>
<p>Linen is strong but wrinkles easily. Machine wash in lukewarm water with regular detergent. Linen gets softer with every wash, so don't worry about being too gentle.</p>
<p><strong>Tip:</strong> Remove from the machine promptly and hang or lay flat to minimize wrinkles.</p>

<h2>Denim</h2>
<p>Denim jeans should be washed inside out in cold water to preserve colour. Avoid washing after every wear — every 4-5 wears is usually sufficient unless visibly soiled.</p>
<p><strong>Tip:</strong> To set the dye in new jeans, soak them in cold water with a cup of white vinegar for an hour before the first wash.</p>

<h2>Quick Reference Guide</h2>
<ul>
<li><strong>Hot water:</strong> White cotton towels, bedsheets, heavily soiled work clothes</li>
<li><strong>Warm water:</strong> Everyday cotton, polyester blends, linen</li>
<li><strong>Cold water:</strong> Silk, wool, denim, dark colours, delicates</li>
</ul>

<p>When in doubt, cold water and a gentle cycle is always the safest option. Orma Detergent Powder is formulated to clean effectively at all temperatures, so you won't sacrifice cleaning power by choosing a lower temperature.</p>
`,
  },
  {
    id: '10',
    title: 'Monsoon Cleaning Guide: Keeping Your Home Fresh & Dry',
    slug: 'monsoon-cleaning-guide',
    excerpt:
      'The rainy season brings unique cleaning challenges — musty smells, damp clothes, mold growth. Here\'s your complete monsoon cleaning checklist.',
    category: 'Home Care',
    date: '2026-01-15',
    readTime: '5 min',
    author: authors.priya,
    tags: ['monsoon', 'home care', 'mold'],
    coverGradient: ['#2563EB', '#93C5FD'],
    content: `
<p>The monsoon season in Eastern India brings welcome relief from the heat, but it also brings humidity, damp clothes, musty smells, and the persistent threat of mold. Here's your complete guide to keeping your home fresh during the rainy season.</p>

<h2>The Damp Clothes Problem</h2>
<p>The biggest laundry challenge during monsoon is getting clothes to dry. Here's what works:</p>
<ul>
<li>Use a spin dryer or the highest spin speed on your washing machine to remove maximum water</li>
<li>Dry clothes on hangers rather than folded on a line — more air circulation</li>
<li>Use a fan or dehumidifier in your drying area</li>
<li>Iron clothes while slightly damp — the heat kills bacteria and removes moisture</li>
<li>Add an extra rinse cycle to ensure all detergent is removed (detergent residue holds moisture)</li>
</ul>

<h2>Fighting Musty Smells</h2>
<p>That distinctive monsoon smell in wardrobes and rooms is caused by mold and mildew thriving in humid conditions.</p>
<ul>
<li>Place silica gel packets or camphor balls in wardrobes and drawers</li>
<li>Leave wardrobe doors open for a few hours daily to allow air circulation</li>
<li>Use neem leaves in storage areas — they're natural antimicrobials</li>
<li>Wash clothes that have been in storage with Orma Detergent Powder before wearing</li>
</ul>

<h2>Preventing Mold Growth</h2>
<p>Mold thrives in dark, damp areas. Focus on:</p>
<ul>
<li><strong>Bathrooms:</strong> Run the exhaust fan for 15 minutes after showers. Wipe down tiles daily.</li>
<li><strong>Kitchen:</strong> Check under the sink for leaks. Keep the area dry.</li>
<li><strong>Windows:</strong> Wipe condensation daily. Use a white vinegar spray on window frames.</li>
<li><strong>Walls:</strong> Watch for dark spots — treat early with a bleach solution before it spreads.</li>
</ul>

<h2>Monsoon Floor Care</h2>
<p>Muddy footprints and wet floors are constant during monsoon. Keep a dedicated doormat at every entrance and mop floors with a disinfectant solution daily. Pay extra attention to kitchen and bathroom floors where standing water can become a breeding ground for bacteria.</p>

<h2>Protect Your Shoes</h2>
<p>Wet shoes are a mold magnet. Stuff them with newspaper after wearing to absorb moisture. Store them in a ventilated area, not inside closed cupboards. For leather shoes, apply a waterproof spray before the monsoon begins.</p>

<p>With a bit of daily attention, your home can stay fresh and comfortable all monsoon long. The key is prevention — it's much easier to keep mold and smells from starting than to remove them once they've set in.</p>
`,
  },
  {
    id: '11',
    title: 'Why We Chose Biodegradable Packaging — And What\'s Next',
    slug: 'biodegradable-packaging-journey',
    excerpt:
      'Our journey towards 100% sustainable packaging by 2027. From the challenges we faced to the innovations driving us forward.',
    category: 'Sustainability',
    date: '2026-01-08',
    readTime: '5 min',
    author: authors.anita,
    tags: ['packaging', 'sustainability', 'innovation'],
    coverGradient: ['#059669', '#6EE7B7'],
    content: `
<p>When we started Viamsh FMCG, we had a choice: follow the industry standard of multi-layer plastic packaging, or invest in finding something better. We chose the harder path, and here's why.</p>

<h2>The Problem with FMCG Packaging</h2>
<p>The FMCG industry is one of the largest contributors to plastic waste in India. Most detergent packaging uses multi-layer plastics that are technically recyclable but rarely recycled in practice. These materials take 400+ years to decompose in landfills.</p>

<h2>Our Decision</h2>
<p>In early 2025, we committed to transitioning to biodegradable packaging materials across our product range. This wasn't a simple switch — it required rethinking our entire packaging supply chain.</p>

<h3>The Challenges We Faced</h3>
<ul>
<li><strong>Cost:</strong> Biodegradable materials are currently 30-40% more expensive than conventional plastics</li>
<li><strong>Shelf Life:</strong> Ensuring the packaging protects the product for the same duration</li>
<li><strong>Supply Chain:</strong> Finding reliable suppliers of biodegradable materials in Eastern India</li>
<li><strong>Consumer Perception:</strong> Some consumers associate eco-packaging with lower quality</li>
</ul>

<h2>Where We Are Now</h2>
<p>As of early 2026, our packaging is partially biodegradable. The outer pouch uses a plant-based polymer blend that decomposes in 12-18 months under composting conditions. We're still working on the inner moisture barrier, which is the most technically challenging component.</p>

<h2>The Road to 2027</h2>
<p>Our target is 100% biodegradable packaging by December 2027. Here's our roadmap:</p>
<ul>
<li><strong>Q2 2026:</strong> Launch compostable sachets for smaller SKUs</li>
<li><strong>Q4 2026:</strong> Switch all secondary packaging (boxes, cartons) to recycled cardboard</li>
<li><strong>Q2 2027:</strong> Introduce refill pouches that use 70% less material than full packs</li>
<li><strong>Q4 2027:</strong> Complete transition to fully biodegradable primary packaging</li>
</ul>

<h2>What You Can Do</h2>
<p>As a consumer, you can support sustainable packaging by:</p>
<ul>
<li>Choosing brands that are transparent about their environmental impact</li>
<li>Opting for larger pack sizes (less packaging per gram of product)</li>
<li>Properly disposing of packaging — separate recyclables from wet waste</li>
<li>Supporting refill programs when available</li>
</ul>

<p>We believe that doing right by the environment and building a successful business aren't mutually exclusive. They're the same thing. Thank you for being part of this journey.</p>
`,
  },
  {
    id: '12',
    title: 'Kitchen Deep Clean: A Weekend Warrior\'s Guide',
    slug: 'kitchen-deep-clean-guide',
    excerpt:
      'Transform your kitchen in one weekend with this room-by-room deep cleaning guide. Covers countertops, appliances, floors, and more.',
    category: 'Home Care',
    date: '2026-01-02',
    readTime: '8 min',
    author: authors.priya,
    tags: ['kitchen', 'deep clean', 'weekend'],
    coverGradient: ['#EA580C', '#FDBA74'],
    content: `
<p>The kitchen is the heart of the home — and usually the hardest-working room. Over time, grease builds up on surfaces, the inside of the microwave develops a mysterious coating, and the fridge starts harbouring forgotten containers. Here's how to transform your kitchen in one focused weekend.</p>

<h2>Saturday Morning: Declutter & Prep</h2>

<h3>Clear the Counters</h3>
<p>Remove everything from the countertops. Yes, everything — the toaster, the spice rack, the fruit bowl. Wipe them all down before putting them back. You'll be surprised how much grime accumulates underneath appliances.</p>

<h3>Empty the Fridge</h3>
<p>Take everything out. Throw away expired items, wilted vegetables, and any container you can't identify. Remove shelves and drawers and soak them in warm soapy water.</p>

<h3>Cabinet Audit</h3>
<p>Open each cabinet and check for expired spices, stale snacks, and items you never use. Wipe down the shelves with a damp cloth.</p>

<h2>Saturday Afternoon: Appliances</h2>

<h3>Oven</h3>
<p>Make a paste of baking soda and water. Spread it inside the oven (avoid heating elements). Let it sit overnight. The next day, spray with white vinegar and wipe away the grime.</p>

<h3>Microwave</h3>
<p>Place a bowl of water with lemon slices inside. Microwave on high for 5 minutes. The steam loosens all the dried-on food. Wipe clean easily with a cloth.</p>

<h3>Refrigerator</h3>
<p>With the shelves soaking, wipe down the interior with a baking soda solution (2 tablespoons in 1 litre of warm water). This cleans and deodorizes simultaneously. Dry the shelves and reassemble.</p>

<h2>Sunday Morning: Surfaces & Sink</h2>

<h3>Countertops</h3>
<p>Different materials need different care. Granite: use a pH-neutral cleaner. Laminate: all-purpose cleaner is fine. Marble: avoid acidic cleaners (no vinegar or lemon). For all surfaces, wipe in one direction to avoid spreading dirt.</p>

<h3>Sink & Faucet</h3>
<p>Scrub the sink with baking soda for a gentle abrasive clean. For the faucet, wrap it in a cloth soaked in white vinegar for 30 minutes to dissolve limescale. Polish with a dry microfibre cloth.</p>

<h3>Backsplash</h3>
<p>Grease splatter on the backsplash is best tackled with a degreasing spray or a paste of dish soap and baking soda. Use an old toothbrush for grout lines.</p>

<h2>Sunday Afternoon: Floors & Finishing</h2>

<h3>Floor Deep Clean</h3>
<p>Sweep thoroughly, getting into corners and under the fridge. Then mop with warm water and a few drops of floor cleaner. For stubborn grease spots, apply cleaner directly and scrub with a brush.</p>

<h3>Final Touches</h3>
<ul>
<li>Replace fridge water filter if needed</li>
<li>Clean the dishwasher — run an empty cycle with white vinegar</li>
<li>Wipe down cabinet fronts, especially around handles</li>
<li>Take out the trash and recycling</li>
<li>Place a fresh box of baking soda in the fridge</li>
</ul>

<p>Step back and admire your sparkling kitchen. With regular maintenance — wiping down surfaces daily and doing a light clean weekly — you won't need another deep clean for months.</p>
`,
  },
];
