// Step Management
let currentStep = 1;
const totalSteps = 7;

// Job titles and companies metadata
const jobTitles = [
    // Technology
    'Software Engineer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Data Scientist', 'Product Manager', 'UI/UX Designer', 'DevOps Engineer', 'Mobile Developer', 'Web Developer', 'System Administrator', 'Database Administrator', 'Network Engineer', 'Cybersecurity Analyst', 'Cloud Architect', 'Machine Learning Engineer', 'AI Researcher', 'Technical Writer', 'Scrum Master', 'QA Engineer', 'Site Reliability Engineer', 'Solutions Architect', 'Technical Lead', 'Engineering Manager', 'CTO', 'VP Engineering', 'Blockchain Developer', 'Game Developer', 'AR/VR Developer', 'IoT Engineer', 'Embedded Systems Engineer',
    // Civil Services & Government
    'IAS Officer', 'IPS Officer', 'IFS Officer', 'Collector', 'District Magistrate', 'Sub Collector', 'Tehsildar', 'Block Development Officer', 'Panchayat Secretary', 'Village Revenue Officer', 'Police Inspector', 'Sub Inspector', 'Constable', 'Forest Officer', 'Customs Officer', 'Income Tax Officer', 'GST Officer', 'Railway Officer', 'Bank PO', 'Clerk', 'Government Teacher', 'UPSC Aspirant', 'State PSC Officer', 'Municipal Commissioner', 'Sarpanch',
    // Banking & Finance
    'Bank Manager', 'Assistant Manager', 'Probationary Officer', 'Clerk', 'Cashier', 'Loan Officer', 'Credit Analyst', 'Investment Advisor', 'Relationship Manager', 'Branch Manager', 'Regional Manager', 'Zonal Manager', 'Chief Manager', 'Deputy General Manager', 'General Manager', 'Executive Director', 'Managing Director', 'Chairman', 'Financial Analyst', 'Investment Banker', 'Accountant', 'Controller', 'CFO', 'Auditor', 'Tax Advisor', 'Risk Manager', 'Compliance Officer', 'Treasury Analyst', 'Portfolio Manager', 'Wealth Manager', 'Insurance Agent', 'Budget Analyst', 'Cost Accountant', 'Payroll Specialist', 'Bookkeeper', 'Chartered Accountant', 'Company Secretary', 'Cost Accountant',
    // Healthcare & Medical
    'Doctor', 'MBBS Doctor', 'MD Specialist', 'MS Surgeon', 'Nurse', 'Staff Nurse', 'Sister', 'ANM', 'GNM', 'B.Sc Nursing', 'Surgeon', 'Physician', 'Dentist', 'BDS', 'MDS', 'Pharmacist', 'D.Pharma', 'B.Pharma', 'M.Pharma', 'Physical Therapist', 'Physiotherapist', 'Occupational Therapist', 'Medical Assistant', 'Radiologist', 'Cardiologist', 'Pediatrician', 'Psychiatrist', 'Anesthesiologist', 'Emergency Medicine Physician', 'Family Medicine Doctor', 'Specialist Nurse', 'Healthcare Administrator', 'Medical Technician', 'Lab Technician', 'X-Ray Technician', 'ECG Technician', 'Dialysis Technician', 'Operation Theatre Assistant', 'Ward Boy', 'Ayah', 'Compounder', 'Medical Representative', 'Hospital Administrator', 'Medical Superintendent',
    // Pharmaceutical
    'Pharmaceutical Scientist', 'Drug Safety Associate', 'Clinical Research Associate', 'Medical Writer', 'Regulatory Affairs Specialist', 'Quality Assurance Manager', 'Production Manager', 'R&D Scientist', 'Formulation Scientist', 'Analytical Chemist', 'Biostatistician', 'Clinical Data Manager', 'Pharmacovigilance Associate', 'Medical Affairs Manager', 'Product Manager', 'Brand Manager', 'Sales Manager', 'Territory Manager', 'Area Sales Manager', 'Regional Sales Manager', 'Zonal Sales Manager', 'National Sales Manager',
    // Education
    'Teacher', 'Primary Teacher', 'Secondary Teacher', 'Higher Secondary Teacher', 'PGT', 'TGT', 'PRT', 'Professor', 'Assistant Professor', 'Associate Professor', 'Principal', 'Vice Principal', 'Headmaster', 'School Administrator', 'Curriculum Developer', 'Education Coordinator', 'Academic Advisor', 'Librarian', 'Research Assistant', 'Teaching Assistant', 'Tutor', 'Education Consultant', 'Training Specialist', 'Instructional Designer', 'Dean', 'Department Head', 'Student Counselor', 'Special Education Teacher', 'ESL Teacher', 'Montessori Teacher', 'Kindergarten Teacher', 'Subject Matter Expert', 'Content Developer', 'E-Learning Specialist',
    // Legal
    'Lawyer', 'Advocate', 'Senior Advocate', 'Attorney', 'Legal Counsel', 'Paralegal', 'Legal Assistant', 'Judge', 'Magistrate', 'Legal Advisor', 'Corporate Lawyer', 'Criminal Defense Attorney', 'Family Lawyer', 'Immigration Lawyer', 'Patent Attorney', 'Tax Attorney', 'Real Estate Attorney', 'Contract Specialist', 'Compliance Lawyer', 'Legal Secretary', 'Court Reporter', 'Legal Researcher', 'Law Clerk', 'Public Prosecutor', 'District Attorney', 'Solicitor General', 'Attorney General',
    // Engineering
    'Civil Engineer', 'Mechanical Engineer', 'Electrical Engineer', 'Electronics Engineer', 'Computer Science Engineer', 'Information Technology Engineer', 'Chemical Engineer', 'Aerospace Engineer', 'Environmental Engineer', 'Biomedical Engineer', 'Industrial Engineer', 'Structural Engineer', 'Petroleum Engineer', 'Mining Engineer', 'Nuclear Engineer', 'Materials Engineer', 'Agricultural Engineer', 'Marine Engineer', 'Automotive Engineer', 'Robotics Engineer', 'Process Engineer', 'Quality Engineer', 'Safety Engineer', 'Production Engineer', 'Design Engineer', 'Test Engineer', 'Field Engineer', 'Site Engineer', 'Project Engineer', 'Consultant Engineer', 'Chief Engineer',
    // Architecture & Construction
    'Architect', 'Landscape Architect', 'Interior Designer', 'Urban Planner', 'Construction Manager', 'Site Supervisor', 'Project Manager', 'Quantity Surveyor', 'Structural Designer', 'MEP Engineer', 'Building Inspector', 'Real Estate Developer', 'Property Manager', 'Facility Manager', 'Construction Worker', 'Mason', 'Carpenter', 'Electrician', 'Plumber', 'Painter', 'Contractor', 'Sub Contractor',
    // Agriculture & Farming
    'Agricultural Officer', 'Farm Manager', 'Agricultural Scientist', 'Horticulturist', 'Soil Scientist', 'Plant Pathologist', 'Entomologist', 'Agricultural Extension Officer', 'Veterinarian', 'Animal Husbandry Officer', 'Dairy Farmer', 'Poultry Farmer', 'Fish Farmer', 'Organic Farmer', 'Crop Consultant', 'Seed Technologist', 'Food Technologist', 'Agricultural Engineer', 'Irrigation Engineer', 'Farm Equipment Operator',
    // Media & Journalism
    'Journalist', 'Reporter', 'News Anchor', 'Editor', 'Sub Editor', 'Copy Editor', 'Content Writer', 'Blogger', 'Social Media Manager', 'Digital Marketing Specialist', 'SEO Specialist', 'Content Marketing Manager', 'Brand Manager', 'Marketing Director', 'Advertising Manager', 'Public Relations Manager', 'Communications Manager', 'Media Planner', 'Creative Director', 'Art Director', 'Graphic Designer', 'Video Editor', 'Photographer', 'Videographer', 'Cinematographer', 'Sound Engineer', 'Radio Jockey', 'TV Producer', 'Film Director', 'Script Writer', 'Documentary Filmmaker',
    // Sales & Marketing
    'Sales Representative', 'Sales Executive', 'Sales Manager', 'Area Sales Manager', 'Regional Sales Manager', 'Zonal Sales Manager', 'National Sales Manager', 'Account Executive', 'Key Account Manager', 'Business Development Manager', 'Business Development Executive', 'Customer Success Manager', 'Sales Director', 'VP Sales', 'Marketing Manager', 'Marketing Executive', 'Marketing Coordinator', 'Market Research Analyst', 'Growth Hacker', 'Email Marketing Specialist', 'Performance Marketing Manager', 'Affiliate Marketing Manager', 'Influencer Marketing Manager', 'Event Manager', 'Trade Marketing Manager', 'Channel Partner Manager',
    // Retail & E-commerce
    'Store Manager', 'Assistant Store Manager', 'Sales Associate', 'Cashier', 'Inventory Manager', 'Visual Merchandiser', 'Category Manager', 'Buyer', 'Procurement Manager', 'Supply Chain Manager', 'Logistics Manager', 'Warehouse Manager', 'Delivery Executive', 'Customer Service Executive', 'E-commerce Manager', 'Marketplace Manager', 'Product Listing Specialist', 'Catalog Manager', 'Fulfillment Associate', 'Returns Specialist',
    // Transportation & Logistics
    'Driver', 'Truck Driver', 'Bus Driver', 'Taxi Driver', 'Auto Rickshaw Driver', 'Delivery Boy', 'Courier', 'Logistics Coordinator', 'Fleet Manager', 'Transport Manager', 'Traffic Controller', 'Dispatcher', 'Route Planner', 'Freight Forwarder', 'Customs Clearance Agent', 'Shipping Agent', 'Port Officer', 'Railway Officer', 'Station Master', 'Train Driver', 'Conductor', 'Pilot', 'Co-Pilot', 'Flight Attendant', 'Air Traffic Controller', 'Ground Staff', 'Airport Security',
    // Hospitality & Tourism
    'Hotel Manager', 'Front Office Manager', 'Housekeeping Manager', 'Food & Beverage Manager', 'Chef', 'Sous Chef', 'Commis Chef', 'Waiter', 'Bartender', 'Receptionist', 'Concierge', 'Bell Boy', 'Room Service', 'Housekeeper', 'Travel Agent', 'Tour Guide', 'Tour Operator', 'Event Manager', 'Wedding Planner', 'Catering Manager', 'Restaurant Manager', 'Cafe Manager', 'Resort Manager', 'Guest Relations Executive',
    // Beauty & Wellness
    'Beautician', 'Hair Stylist', 'Makeup Artist', 'Nail Technician', 'Spa Therapist', 'Massage Therapist', 'Fitness Trainer', 'Gym Instructor', 'Yoga Instructor', 'Nutritionist', 'Dietitian', 'Wellness Coach', 'Personal Trainer', 'Aerobics Instructor', 'Dance Instructor', 'Salon Manager', 'Spa Manager', 'Fitness Center Manager',
    // Sports & Recreation
    'Sports Coach', 'Physical Education Teacher', 'Fitness Trainer', 'Sports Manager', 'Sports Journalist', 'Sports Commentator', 'Referee', 'Umpire', 'Sports Analyst', 'Athletic Trainer', 'Sports Psychologist', 'Sports Nutritionist', 'Event Coordinator', 'Stadium Manager', 'Sports Marketing Manager', 'Player Agent', 'Scout', 'Team Manager',
    // Creative & Design
    'Graphic Designer', 'Web Designer', 'UI Designer', 'UX Designer', 'Product Designer', 'Fashion Designer', 'Textile Designer', 'Jewelry Designer', 'Interior Designer', 'Architect', 'Landscape Architect', 'Industrial Designer', 'Set Designer', 'Costume Designer', 'Makeup Artist', 'Art Director', 'Creative Director', 'Photographer', 'Videographer', 'Animator', 'Illustrator', 'Game Designer', 'Motion Graphics Designer', 'Brand Designer', 'Package Designer', 'Exhibition Designer',
    // Manufacturing & Production
    'Production Manager', 'Plant Manager', 'Quality Control Manager', 'Quality Assurance Manager', 'Manufacturing Engineer', 'Process Engineer', 'Industrial Engineer', 'Maintenance Engineer', 'Safety Officer', 'Production Supervisor', 'Shift Supervisor', 'Line Leader', 'Machine Operator', 'Technician', 'Maintenance Technician', 'Quality Inspector', 'Store Keeper', 'Material Handler', 'Forklift Operator', 'Crane Operator', 'Welder', 'Fitter', 'Turner', 'Machinist', 'Tool Maker', 'Die Maker',
    // Operations & Management
    'Operations Manager', 'General Manager', 'CEO', 'COO', 'Managing Director', 'Executive Director', 'Director', 'Vice President', 'Assistant Vice President', 'Deputy General Manager', 'Assistant General Manager', 'Project Manager', 'Program Manager', 'Supply Chain Manager', 'Logistics Coordinator', 'Warehouse Manager', 'Inventory Manager', 'Facilities Manager', 'Office Manager', 'Administrative Assistant', 'Executive Assistant', 'Personal Assistant', 'Secretary', 'Receptionist', 'Office Boy', 'Peon', 'Security Guard', 'Watchman', 'Operations Analyst', 'Process Improvement Specialist', 'Management Consultant', 'Business Consultant', 'Strategy Consultant',
    // Human Resources
    'HR Manager', 'HR Generalist', 'HR Specialist', 'HR Executive', 'HR Assistant', 'Recruiter', 'Talent Acquisition Specialist', 'HR Director', 'CHRO', 'VP HR', 'Compensation Analyst', 'Benefits Administrator', 'Training Manager', 'Learning & Development Manager', 'Organizational Development Specialist', 'Employee Relations Specialist', 'HR Business Partner', 'Diversity & Inclusion Manager', 'Payroll Manager', 'HR Coordinator', 'Workforce Planning Analyst', 'Performance Management Specialist', 'HR Information Systems Analyst', 'Labor Relations Specialist', 'Campus Recruitment Manager', 'Employee Engagement Manager',
    // Customer Service
    'Customer Service Representative', 'Customer Support Specialist', 'Call Center Agent', 'Technical Support Specialist', 'Customer Success Specialist', 'Help Desk Technician', 'Customer Experience Manager', 'Client Relations Manager', 'Support Manager', 'Customer Care Coordinator', 'Customer Service Manager', 'Call Center Manager', 'Team Leader', 'Quality Analyst', 'Training Specialist', 'Escalation Manager', 'Customer Retention Specialist', 'Customer Onboarding Specialist',
    // Security & Defense
    'Security Guard', 'Security Officer', 'Security Manager', 'Security Supervisor', 'Bouncer', 'Bodyguard', 'CCTV Operator', 'Security Analyst', 'Cybersecurity Specialist', 'Information Security Officer', 'Risk Assessment Specialist', 'Compliance Officer', 'Audit Manager', 'Internal Auditor', 'External Auditor', 'Forensic Accountant', 'Investigation Officer', 'Detective', 'Police Officer', 'Army Officer', 'Navy Officer', 'Air Force Officer', 'Paramilitary Officer', 'Intelligence Officer',
    // Social Work & NGO
    'Social Worker', 'Community Development Officer', 'NGO Worker', 'Project Coordinator', 'Program Manager', 'Field Officer', 'Counselor', 'Therapist', 'Psychologist', 'Rehabilitation Specialist', 'Case Manager', 'Outreach Worker', 'Volunteer Coordinator', 'Fundraising Manager', 'Grant Writer', 'Research Associate', 'Policy Analyst', 'Advocacy Specialist', 'Communications Officer', 'Monitoring & Evaluation Officer'
];

const companies = [
    // Indian IT & Technology Giants
    'TCS', 'Infosys', 'Wipro', 'HCL Technologies', 'Tech Mahindra', 'Cognizant', 'Capgemini', 'Accenture', 'IBM India', 'Microsoft India', 'Google India', 'Amazon India', 'Flipkart', 'Paytm', 'PhonePe', 'Razorpay', 'Zomato', 'Swiggy', 'Ola', 'Uber India', 'MakeMyTrip', 'BookMyShow', 'Nykaa', 'BigBasket', 'Grofers', 'Byjus', 'Unacademy', 'Vedantu', 'WhiteHat Jr', 'Freshworks', 'Zoho', 'InMobi', 'Hike', 'ShareChat', 'Dream11', 'MPL', 'Paytm Mall', 'Snapdeal', 'Myntra', 'Ajio', 'Meesho', 'Urban Company', 'Dunzo', 'Licious', 'Country Delight', 'Zerodha', 'Upstox', 'Groww', 'CRED', 'Jupiter', 'Slice', 'Khatabook', 'BharatPe', 'Pine Labs', 'Juspay', 'Cashfree', 'Instamojo', 'PayU', 'CCAvenue', 'Billdesk', 'Mobikwik', 'Freecharge', 'Airtel Money', 'JioMoney', 'BHIM', 'Google Pay', 'Amazon Pay', 'Samsung Pay', 'LIC', 'SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Kotak Mahindra Bank', 'Yes Bank', 'IndusInd Bank', 'Federal Bank', 'IDFC First Bank', 'RBL Bank', 'Bandhan Bank', 'AU Small Finance Bank', 'Equitas Small Finance Bank', 'Jana Small Finance Bank', 'Ujjivan Small Finance Bank', 'Suryoday Small Finance Bank', 'Capital Small Finance Bank', 'North East Small Finance Bank', 'Shivalik Small Finance Bank', 'Unity Small Finance Bank',
    // Indian Conglomerates & Traditional Industries
    'Reliance Industries', 'Tata Group', 'Tata Consultancy Services', 'Tata Motors', 'Tata Steel', 'Tata Power', 'Tata Chemicals', 'Tata Consumer Products', 'Titan Company', 'Trent', 'Indian Hotels Company', 'Voltas', 'Tata Communications', 'Tata Elxsi', 'Adani Group', 'Adani Enterprises', 'Adani Ports', 'Adani Transmission', 'Adani Green Energy', 'Adani Total Gas', 'Adani Power', 'Adani Wilmar', 'Birla Group', 'Aditya Birla Group', 'UltraTech Cement', 'Grasim Industries', 'Hindalco Industries', 'Aditya Birla Fashion and Retail', 'Aditya Birla Capital', 'Aditya Birla Sun Life AMC', 'Mahindra Group', 'Mahindra & Mahindra', 'Tech Mahindra', 'Mahindra Finance', 'Mahindra Logistics', 'Mahindra Lifespace Developers', 'Mahindra Holidays', 'Bajaj Group', 'Bajaj Auto', 'Bajaj Finance', 'Bajaj Finserv', 'Bajaj Holdings', 'Bajaj Electricals', 'Godrej Group', 'Godrej Consumer Products', 'Godrej Properties', 'Godrej Industries', 'Godrej Agrovet', 'Larsen & Toubro', 'L&T Infotech', 'L&T Technology Services', 'Mindtree', 'L&T Finance Holdings', 'Bharti Airtel', 'Bharti Enterprises', 'Jio', 'Reliance Jio', 'Vodafone Idea', 'BSNL', 'MTNL', 'Aircel', 'Idea Cellular', 'Vodafone India', 'Tata Teleservices', 'Reliance Communications', 'Airtel', 'Jio Fiber', 'Airtel Fiber', 'BSNL Broadband', 'Railtel', 'PowerGrid Corporation', 'NTPC', 'Coal India', 'Oil and Natural Gas Corporation', 'ONGC', 'Indian Oil Corporation', 'IOCL', 'Bharat Petroleum Corporation Limited', 'BPCL', 'Hindustan Petroleum Corporation Limited', 'HPCL', 'Gas Authority of India Limited', 'GAIL', 'Petronet LNG', 'Reliance Petroleum', 'Essar Oil', 'Nayara Energy', 'Shell India', 'BP India', 'Total India', 'ExxonMobil India', 'Chevron India',
    // Indian Banks & Financial Services
    'State Bank of India', 'SBI', 'Punjab National Bank', 'PNB', 'Bank of Baroda', 'BOB', 'Canara Bank', 'Union Bank of India', 'Indian Bank', 'Central Bank of India', 'Indian Overseas Bank', 'IOB', 'UCO Bank', 'Bank of Maharashtra', 'Punjab & Sind Bank', 'Bank of India', 'BOI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Kotak Mahindra Bank', 'Yes Bank', 'IndusInd Bank', 'Federal Bank', 'IDFC First Bank', 'RBL Bank', 'Bandhan Bank', 'AU Small Finance Bank', 'Equitas Small Finance Bank', 'Jana Small Finance Bank', 'Ujjivan Small Finance Bank', 'Suryoday Small Finance Bank', 'Capital Small Finance Bank', 'North East Small Finance Bank', 'Shivalik Small Finance Bank', 'Unity Small Finance Bank', 'HDFC Life', 'ICICI Prudential Life Insurance', 'SBI Life Insurance', 'Max Life Insurance', 'Bajaj Allianz Life Insurance', 'Aditya Birla Sun Life Insurance', 'Tata AIA Life Insurance', 'PNB MetLife', 'Canara HSBC Oriental Bank of Commerce Life Insurance', 'Kotak Mahindra Life Insurance', 'Reliance Nippon Life Insurance', 'Shriram Life Insurance', 'Star Union Dai-ichi Life Insurance', 'Future Generali India Life Insurance', 'Bharti AXA Life Insurance', 'Aviva Life Insurance', 'Aegon Life Insurance', 'DHFL Pramerica Life Insurance', 'Exide Life Insurance', 'India First Life Insurance', 'IDBI Federal Life Insurance', 'Sahara Life Insurance', 'Edelweiss Tokio Life Insurance',
    // Indian Pharmaceuticals & Healthcare
    'Sun Pharmaceutical Industries', 'Dr. Reddys Laboratories', 'Cipla', 'Lupin', 'Aurobindo Pharma', 'Divi\'s Laboratories', 'Biocon', 'Cadila Healthcare', 'Zydus Cadila', 'Torrent Pharmaceuticals', 'Glenmark Pharmaceuticals', 'Alkem Laboratories', 'Mankind Pharma', 'Emcure Pharmaceuticals', 'Intas Pharmaceuticals', 'Hetero Drugs', 'Strides Pharma Science', 'Natco Pharma', 'Granules India', 'Laurus Labs', 'Suven Pharmaceuticals', 'Syngene International', 'Piramal Enterprises', 'Wockhardt', 'Jubilant Life Sciences', 'Dishman Carbogen Amcis', 'Sequent Scientific', 'Solara Active Pharma Sciences', 'Neuland Laboratories', 'Shilpa Medicare', 'Ami Organics', 'Rossari Biotech', 'Clean Science and Technology', 'Vinati Organics', 'Navin Fluorine International', 'SRF', 'Aarti Industries', 'Gujarat Fluorochemicals', 'Deepak Nitrite', 'Alkyl Amines Chemicals', 'Fine Organic Industries', 'Tatva Chintan Pharma Chem', 'Anupam Rasayan India', 'Chemcon Speciality Chemicals', 'Neogen Chemicals', 'Privi Speciality Chemicals', 'Rossari Biotech', 'Galaxy Surfactants', 'Balaji Amines', 'Camson Bio Technologies', 'Hikal', 'Sudarshan Chemical Industries', 'Kiri Industries', 'Bodal Chemicals', 'Meghmani Organics', 'Astec LifeSciences', 'PI Industries', 'UPL', 'Rallis India', 'Coromandel International', 'Chambal Fertilisers and Chemicals', 'National Fertilizers Limited', 'Rashtriya Chemicals and Fertilizers', 'Indian Farmers Fertiliser Cooperative', 'IFFCO', 'Krishak Bharati Cooperative', 'KRIBHCO', 'Gujarat State Fertilizers & Chemicals', 'Madras Fertilizers Limited', 'Southern Petrochemicals Industries Corporation', 'SPIC', 'Zuari Agro Chemicals', 'Paradeep Phosphates', 'Mangalore Chemicals & Fertilizers', 'Fertilizers and Chemicals Travancore', 'FACT',
    // Indian Automotive
    'Tata Motors', 'Mahindra & Mahindra', 'Maruti Suzuki', 'Hyundai Motor India', 'Bajaj Auto', 'TVS Motor Company', 'Hero MotoCorp', 'Eicher Motors', 'Royal Enfield', 'Ashok Leyland', 'Force Motors', 'Escorts', 'Swaraj Mazda', 'VE Commercial Vehicles', 'SML Isuzu', 'Bharat Benz', 'BharatBenz', 'Volvo Eicher Commercial Vehicles', 'VECV', 'Mahindra Commercial Vehicles', 'Tata Commercial Vehicles', 'Ashok Leyland', 'Force Motors', 'Escorts', 'Swaraj Mazda', 'VE Commercial Vehicles', 'SML Isuzu', 'Bharat Benz', 'BharatBenz', 'Volvo Eicher Commercial Vehicles', 'VECV', 'Mahindra Commercial Vehicles', 'Tata Commercial Vehicles', 'Honda Cars India', 'Toyota Kirloskar Motor', 'Ford India', 'Volkswagen India', 'Skoda Auto India', 'Nissan Motor India', 'Renault India', 'Kia Motors India', 'MG Motor India', 'Jeep India', 'Fiat Chrysler Automobiles India', 'BMW India', 'Mercedes-Benz India', 'Audi India', 'Jaguar Land Rover India', 'Volvo Cars India', 'Lexus India', 'Infiniti India', 'Porsche India', 'Ferrari India', 'Lamborghini India', 'Bentley India', 'Rolls-Royce Motor Cars India', 'McLaren India', 'Aston Martin India', 'Maserati India', 'Bugatti India', 'Koenigsegg India', 'Pagani India', 'Tesla India',
    // Global Technology Giants
    'Google', 'Microsoft', 'Apple', 'Amazon', 'Meta', 'Netflix', 'Tesla', 'Uber', 'Airbnb', 'Spotify', 'Adobe', 'Salesforce', 'Oracle', 'IBM', 'Intel', 'NVIDIA', 'PayPal', 'Square', 'Stripe', 'Zoom', 'Slack', 'Dropbox', 'Twitter', 'LinkedIn', 'GitHub', 'Atlassian', 'Shopify', 'Twilio', 'MongoDB', 'Redis', 'Elastic', 'Docker', 'Cisco', 'VMware', 'ServiceNow', 'Workday', 'Palantir', 'Snowflake', 'Databricks', 'Unity', 'Roblox', 'Epic Games', 'Valve', 'Steam', 'Discord', 'Telegram', 'WhatsApp', 'TikTok', 'Snapchat', 'Pinterest', 'Reddit', 'Quora', 'Stack Overflow', 'Samsung', 'Sony', 'LG', 'Panasonic', 'Toshiba', 'Hitachi', 'Fujitsu', 'NEC', 'Sharp', 'Canon', 'Nikon', 'Olympus', 'Fujifilm', 'Ricoh', 'Epson', 'Brother', 'Kyocera', 'Konica Minolta', 'Xerox', 'HP', 'Dell', 'Lenovo', 'Asus', 'Acer', 'MSI', 'Gigabyte', 'ASRock', 'Corsair', 'Logitech', 'Razer', 'SteelSeries', 'HyperX', 'Cooler Master', 'Thermaltake', 'NZXT', 'Fractal Design', 'be quiet!', 'Seasonic', 'EVGA', 'Corsair', 'G.Skill', 'Crucial', 'Kingston', 'Western Digital', 'Seagate', 'Toshiba', 'Samsung', 'SK Hynix', 'Micron', 'Intel', 'AMD', 'NVIDIA', 'Qualcomm', 'Broadcom', 'MediaTek', 'ARM', 'Imagination Technologies', 'Synopsys', 'Cadence', 'Mentor Graphics', 'Ansys', 'Altium', 'Autodesk', 'Dassault Systemes', 'PTC', 'Siemens PLM Software', 'Bentley Systems', 'ESRI', 'Trimble', 'Hexagon', 'Renishaw', 'FARO Technologies', 'Creaform', 'GOM', 'Zeiss', 'Leica Geosystems', 'Topcon', 'Sokkia', 'Pentax', 'Nikon', 'Canon', 'Sony', 'Panasonic', 'JVC', 'Pioneer', 'Kenwood', 'Alpine', 'Clarion', 'Denso', 'Bosch', 'Continental', 'Magna', 'Aptiv', 'Valeo', 'Faurecia', 'Michelin', 'Bridgestone', 'Goodyear', 'Pirelli', 'Yokohama', 'Hankook', 'Kumho', 'Toyo', 'Falken', 'Nitto', 'BFGoodrich', 'Cooper', 'General Tire', 'Uniroyal', 'Firestone', 'Dunlop', 'Sumitomo', 'Maxxis', 'Nexen', 'GT Radial', 'Sailun', 'Linglong', 'Triangle', 'Doublestar', 'Wanli', 'Sunny', 'Roadstone', 'Atturo', 'Accelera', 'Achilles', 'Antares', 'Arroyo', 'Atlas', 'Autogrip', 'Blackhawk', 'Boto', 'Centara', 'Chaoyang', 'Comforser', 'Crosswind', 'Delinte', 'Dextero', 'Duraturn', 'Ecsta', 'Eldorado', 'Evergreen', 'Farroad', 'Forceum', 'Fullrun', 'Fuzion', 'Gislaved', 'Goodride', 'Greenmax', 'Gripmax', 'Haida', 'Hercules', 'Hifly', 'Horizon', 'Ironman', 'Jinyu', 'Kenda', 'Kinforest', 'Landsail', 'Leao', 'Lexani', 'Lionhart', 'Luccini', 'Mazzini', 'Milestar', 'Minerva', 'Nankang', 'Neuton', 'Nokian', 'Ohtsu', 'Otani', 'Patriot', 'Primewell', 'Radar', 'Roadclaw', 'Roadshine', 'Rotalla', 'Runway', 'Saffiro', 'Sentury', 'Starfire', 'Sumic', 'Sunny', 'Superia', 'Thunderer', 'Tigar', 'Tracmax', 'Trazano', 'Uniroyal', 'Vercelli', 'Vitour', 'Wanli', 'Westlake', 'Winrun', 'Zeetex', 'Zenna'
];

function changeStep(direction) {
    const newStep = currentStep + direction;
    
    if (newStep < 1 || newStep > totalSteps) return;
    
    // Hide current step
    document.getElementById(`step${currentStep}`).classList.remove('active');
    document.querySelector(`.step[data-step="${currentStep}"]`).classList.remove('active');
    
    // Show new step
    currentStep = newStep;
    document.getElementById(`step${currentStep}`).classList.add('active');
    document.querySelector(`.step[data-step="${currentStep}"]`).classList.add('active');
    
    // Update form-sidebar class for step tracking
    const formSidebar = document.querySelector('.form-sidebar');
    formSidebar.className = formSidebar.className.replace(/step-\d+/g, '');
    formSidebar.classList.add(`step-${currentStep}`);
    
    // Mark completed steps
    for (let i = 1; i < currentStep; i++) {
        document.querySelector(`.step[data-step="${i}"]`).classList.add('completed');
    }
    
    // Reset scroll position to top - force scroll
    setTimeout(() => {
        if (formSidebar) {
            formSidebar.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, 50);
    
    // Update navigation buttons
    updateNavigation();
    
    // Generate resume on each step
    generateResume();
}

function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.style.display = currentStep === 1 ? 'none' : 'block';
    
    if (currentStep === totalSteps) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
        nextBtn.textContent = 'Next';
        nextBtn.onclick = function() { changeStep(1); };
    }
}

// Template Management
function changeTemplate() {
    const selector = document.getElementById('templateSelector');
    const styleLink = document.getElementById('resumeStyle');
    styleLink.href = selector.value;
}

// Dynamic Form Elements
function addExperience() {
    const container = document.getElementById('experienceContainer');
    const newItem = document.createElement('div');
    newItem.className = 'experience-item';
    newItem.innerHTML = `
        <div class="form-group">
            <label>Job Title</label>
            <input type="text" placeholder="Software Engineer" class="jobTitle">
        </div>
        <div class="form-group">
            <label>Company Name</label>
            <input type="text" placeholder="Tech Corp" class="companyName">
        </div>
        <div class="form-group">
            <label>Employment Period</label>
            <div class="date-range">
                <input type="month" class="startDate" placeholder="Start Date">
                <span>to</span>
                <input type="month" class="endDate" placeholder="End Date">
                <label><input type="checkbox" class="currentJob"> Current Position</label>
            </div>
        </div>
        <div class="form-group">
            <label>Job Responsibilities</label>
            <textarea placeholder="• Developed web applications\n• Led team of 5 developers\n• Improved system performance by 30%" rows="3" class="responsibilities"></textarea>
        </div>
        <button type="button" onclick="this.parentElement.remove(); generateResume();">Remove</button>
    `;
    container.appendChild(newItem);
    addEventListeners(newItem);
    
    // Setup autocomplete for new inputs
    const jobTitleInput = newItem.querySelector('.jobTitle');
    const companyInput = newItem.querySelector('.companyName');
    setupAutocomplete(jobTitleInput, jobTitles);
    setupAutocomplete(companyInput, companies);
}

function addProject() {
    const container = document.getElementById('projectsContainer');
    const newItem = document.createElement('div');
    newItem.className = 'project-item';
    newItem.innerHTML = `
        <div class="form-group">
            <label>Project Name</label>
            <input type="text" placeholder="E-commerce Website" class="projectName">
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea placeholder="Built a full-stack e-commerce platform with user authentication, payment integration, and admin dashboard" rows="3" class="projectDesc"></textarea>
        </div>
        <div class="form-group">
            <label>Technologies Used</label>
            <input type="text" placeholder="React, Node.js, MongoDB, Stripe API" class="projectTech">
        </div>
        <div class="form-group">
            <label>Demo/Repository Link (Optional)</label>
            <input type="url" placeholder="https://github.com/username/project or https://demo.com" class="projectLink">
        </div>
        <button type="button" onclick="this.parentElement.remove(); generateResume();">Remove</button>
    `;
    container.appendChild(newItem);
    addEventListeners(newItem);
}

function addEducation() {
    const container = document.getElementById('educationContainer');
    const newItem = document.createElement('div');
    newItem.className = 'education-item';
    newItem.innerHTML = `
        <input type="text" placeholder="Institution Name" class="institution">
        <input type="text" placeholder="Degree/Course" class="degree">
        <div class="date-range">
            <input type="month" class="eduStartDate" placeholder="Start Date">
            <span>to</span>
            <input type="month" class="eduEndDate" placeholder="End Date">
        </div>
        <input type="number" placeholder="3.8 or 85" class="gpa" step="0.01" min="0" max="100">
        <button type="button" onclick="this.parentElement.remove(); generateResume();">Remove</button>
    `;
    container.appendChild(newItem);
    addEventListeners(newItem);
}

function addSkill() {
    const container = document.getElementById('skillsContainer');
    const newItem = document.createElement('div');
    newItem.className = 'skill-item';
    newItem.innerHTML = `
        <div class="form-group">
            <label>Skill Category</label>
            <input type="text" placeholder="e.g., Programming Languages" class="skillCategory">
        </div>
        <div class="form-group">
            <label>Skills</label>
            <input type="text" placeholder="JavaScript, Python, Java" class="skillList">
        </div>
        <button type="button" onclick="this.parentElement.remove(); generateResume();">Remove</button>
    `;
    container.appendChild(newItem);
    addEventListeners(newItem);
}

function addCertification() {
    const container = document.getElementById('certificationsContainer');
    const newItem = document.createElement('div');
    newItem.className = 'certification-item';
    newItem.innerHTML = `
        <div class="form-group">
            <label>Certification Name</label>
            <input type="text" placeholder="AWS Certified Solutions Architect" class="certName">
        </div>
        <div class="form-group">
            <label>Issuing Organization</label>
            <input type="text" placeholder="Amazon Web Services" class="certOrg">
        </div>
        <div class="form-group">
            <label>Date Obtained</label>
            <div class="custom-date single">
                <select class="certMonth"><option value="">Month</option></select>
                <select class="certYear"><option value="">Year</option></select>
            </div>
        </div>
        <button type="button" onclick="this.parentElement.remove(); generateResume();">Remove</button>
    `;
    container.appendChild(newItem);
    addEventListeners(newItem);
}

function addLanguage() {
    const container = document.getElementById('languagesContainer');
    const newItem = document.createElement('div');
    newItem.className = 'language-item';
    newItem.innerHTML = `
        <div class="form-group">
            <label>Language</label>
            <input type="text" placeholder="English" class="languageName">
        </div>
        <div class="form-group">
            <label>Proficiency Level</label>
            <select class="proficiency">
                <option value="">Select Level</option>
                <option value="Native">Native</option>
                <option value="Fluent">Fluent</option>
                <option value="Advanced">Advanced</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Basic">Basic</option>
            </select>
        </div>
        <button type="button" onclick="this.parentElement.remove(); generateResume();">Remove</button>
    `;
    container.appendChild(newItem);
    addEventListeners(newItem);
}

function addAward() {
    const container = document.getElementById('awardsContainer');
    const newItem = document.createElement('div');
    newItem.className = 'award-item';
    newItem.innerHTML = `
        <input type="text" placeholder="Award Title" class="awardTitle">
        <input type="text" placeholder="Issuer/Institution" class="awardIssuer">
        <div class="custom-date single">
            <select class="awardMonth"><option value="">Month</option></select>
            <select class="awardYear"><option value="">Year</option></select>
        </div>
        <button type="button" onclick="this.parentElement.remove(); generateResume();">Remove</button>
    `;
    container.appendChild(newItem);
    addEventListeners(newItem);
}

function addEventListeners(element) {
    const inputs = element.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('input', generateResume);
        input.addEventListener('change', generateResume);
    });
    
    // Add current job toggle functionality
    const currentJobCheckbox = element.querySelector('.currentJob');
    if (currentJobCheckbox) {
        currentJobCheckbox.addEventListener('change', function() {
            const endDate = element.querySelector('.endDate');
            
            if (this.checked) {
                endDate.disabled = true;
                endDate.value = '';
            } else {
                endDate.disabled = false;
            }
            generateResume();
        });
    }
    
    // Populate year dropdowns in new elements
    const yearSelects = element.querySelectorAll('select[class*="Year"]');
    const currentYear = new Date().getFullYear();
    
    yearSelects.forEach(select => {
        for (let year = currentYear + 2; year >= currentYear - 50; year--) {
            select.innerHTML += `<option value="${year}">${year}</option>`;
        }
    });
    
    // Populate month dropdowns in new elements
    const monthSelects = element.querySelectorAll('select[class*="Month"]');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    monthSelects.forEach(select => {
        months.forEach(month => {
            select.innerHTML += `<option value="${month}">${month}</option>`;
        });
    });
    
    // Add date validation for work experience
    const startDate = element.querySelector('.startDate');
    const endDate = element.querySelector('.endDate');
    
    if (startDate && endDate) {
        startDate.addEventListener('change', function() {
            if (endDate.value) validateDateRange(startDate, endDate);
        });
        endDate.addEventListener('change', function() {
            validateDateRange(startDate, endDate);
        });
    }
    
    // Add date validation for education
    const eduStartDate = element.querySelector('.eduStartDate');
    const eduEndDate = element.querySelector('.eduEndDate');
    
    if (eduStartDate && eduEndDate) {
        eduStartDate.addEventListener('change', function() {
            if (eduEndDate.value) validateDateRange(eduStartDate, eduEndDate);
        });
        eduEndDate.addEventListener('change', function() {
            validateDateRange(eduStartDate, eduEndDate);
        });
    }
}

function validateDateRange(startDateInput, endDateInput) {
    if (!startDateInput.value || !endDateInput.value) return;
    
    const startDate = new Date(startDateInput.value + '-01');
    const endDate = new Date(endDateInput.value + '-01');
    
    if (endDate < startDate) {
        endDateInput.value = '';
        alert('End date cannot be earlier than start date. Please select a valid end date.');
    }
}

function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString + '-01');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

// Resume Generation (using existing logic from generator.js)
function generateResume() {
    const resume = document.getElementById('resume');
    
    // Get form data
    const name = document.getElementById('fullName').value || 'Rajesh Kumar';
    const jobTitle = document.getElementById('jobTitle').value;
    const email = document.getElementById('email').value || 'email@example.com';
    const phone = document.getElementById('phone').value || '+123 456 7890';
    const linkName1 = document.getElementById('linkName1').value;
    const linkUrl1 = document.getElementById('linkUrl1').value;
    const linkName2 = document.getElementById('linkName2').value;
    const linkUrl2 = document.getElementById('linkUrl2').value;
    const location = document.getElementById('location').value || 'City, Country';
    const summary = document.getElementById('summary').value || 'Professional summary will appear here...';
    
    // Update header
    let headerHTML = `<div class="name">${name}</div>`;
    if (jobTitle) {
        headerHTML += `<div style="font-size: 1.2em; color: #666; margin: 5px 0;">${jobTitle}</div>`;
    }
    
    let contactInfo = [];
    contactInfo.push(`<span class="contact-icon email"><i class="fas fa-envelope"></i></span> ${email}`, `<span class="contact-icon phone"><i class="fas fa-phone"></i></span> ${phone}`);
    if (linkName1 && linkUrl1) {
        const url1 = linkUrl1.startsWith('http') ? linkUrl1 : `https://${linkUrl1}`;
        contactInfo.push(`<span class="contact-icon link"><i class="fas fa-external-link-alt"></i></span> <a href="${url1}" target="_blank">${linkName1}</a>`);
    }
    if (linkName2 && linkUrl2) {
        const url2 = linkUrl2.startsWith('http') ? linkUrl2 : `https://${linkUrl2}`;
        contactInfo.push(`<span class="contact-icon link"><i class="fas fa-external-link-alt"></i></span> <a href="${url2}" target="_blank">${linkName2}</a>`);
    }
    contactInfo.push(`<span class="contact-icon location"><i class="fas fa-map-marker-alt"></i></span> ${location}`);
    
    headerHTML += `<div class="contact">${contactInfo.join(' | ')}</div>`;
    resume.querySelector('.header').innerHTML = headerHTML;
    
    // Clear existing sections except header
    const sections = resume.querySelectorAll('section');
    sections.forEach(section => section.remove());
    
    // Update summary
    if (summary && summary !== 'Professional summary will appear here...') {
        const summarySection = document.createElement('section');
        summarySection.innerHTML = `
            <div class="section-title">Professional Summary</div>
            <p>${summary}</p>
        `;
        resume.appendChild(summarySection);
    }
    
    // Update skills
    const skillItems = document.querySelectorAll('.skill-item');
    let hasSkills = false;
    let skillsHTML = '<div class="section-title">Skills</div>';
    
    skillItems.forEach(item => {
        const category = item.querySelector('.skillCategory').value;
        const skills = item.querySelector('.skillList').value;
        
        if (category && skills) {
            skillsHTML += `<p><strong>${category}:</strong> ${skills}</p>`;
            hasSkills = true;
        }
    });
    
    if (hasSkills) {
        const skillsSection = document.createElement('section');
        skillsSection.innerHTML = skillsHTML;
        resume.appendChild(skillsSection);
    }
    
    // Update experience
    const experienceItems = document.querySelectorAll('.experience-item');
    let hasExperience = false;
    let experienceHTML = '<div class="section-title">Work Experience</div>';
    
    experienceItems.forEach(item => {
        const jobTitle = item.querySelector('.jobTitle').value;
        const companyName = item.querySelector('.companyName').value;
        const currentJob = item.querySelector('.currentJob').checked;
        const responsibilities = item.querySelector('.responsibilities').value;
        
        if (jobTitle || companyName) {
            let duration = '';
            const startDate = item.querySelector('.startDate').value;
            const endDate = item.querySelector('.endDate').value;
            
            if (startDate) {
                const start = formatDate(startDate);
                const end = currentJob ? 'Present' : (endDate ? formatDate(endDate) : '');
                duration = `${start} - ${end}`;
            }
            
            const jobHeader = companyName ? `${jobTitle} - ${companyName}` : jobTitle;
            experienceHTML += `
                <h3>${jobHeader}</h3>
                <p><em>${duration}</em></p>
                <ul>
            `;
            
            if (responsibilities) {
                responsibilities.split('\n').forEach(resp => {
                    if (resp.trim()) {
                        experienceHTML += `<li>${resp.trim()}</li>`;
                    }
                });
            }
            
            experienceHTML += '</ul>';
            hasExperience = true;
        }
    });
    
    if (hasExperience) {
        const experienceSection = document.createElement('section');
        experienceSection.innerHTML = experienceHTML;
        resume.appendChild(experienceSection);
    }
    
    // Update projects
    const projectItems = document.querySelectorAll('.project-item');
    let hasProjects = false;
    let projectsHTML = '<div class="section-title">Projects</div>';
    
    projectItems.forEach(item => {
        const projectName = item.querySelector('.projectName').value;
        const projectTech = item.querySelector('.projectTech').value;
        const projectDesc = item.querySelector('.projectDesc').value;
        const projectLink = item.querySelector('.projectLink').value;
        
        if (projectName) {
            projectsHTML += `<h3>${projectName}</h3>`;
            if (projectTech) {
                projectsHTML += `<p><em>Technologies: ${projectTech}</em></p>`;
            }
            if (projectDesc) {
                projectsHTML += `<p>${projectDesc}</p>`;
            }
            if (projectLink) {
                const url = projectLink.startsWith('http') ? projectLink : `https://${projectLink}`;
                const linkText = projectLink.length > 50 ? projectLink.substring(0, 47) + '...' : projectLink;
                projectsHTML += `<p><strong>Link:</strong> <a href="${url}" target="_blank">${linkText}</a></p>`;
            }
            hasProjects = true;
        }
    });
    
    if (hasProjects) {
        const projectsSection = document.createElement('section');
        projectsSection.innerHTML = projectsHTML;
        resume.appendChild(projectsSection);
    }
    
    // Update education
    const educationItems = document.querySelectorAll('.education-item');
    let hasEducation = false;
    let educationHTML = '<div class="section-title">Education</div>';
    
    educationItems.forEach(item => {
        const institution = item.querySelector('.institution').value;
        const degree = item.querySelector('.degree').value;
        const gpa = item.querySelector('.gpa').value;
        
        if (institution || degree) {
            let duration = '';
            const startDate = item.querySelector('.eduStartDate').value;
            const endDate = item.querySelector('.eduEndDate').value;
            
            if (startDate && endDate) {
                duration = `${formatDate(startDate)} - ${formatDate(endDate)}`;
            }
            
            let gpaText = '';
            if (gpa) {
                const gpaValue = parseFloat(gpa);
                if (gpaValue <= 10) {
                    gpaText = `<p>GPA: ${gpa}</p>`;
                } else {
                    gpaText = `<p>Percentage: ${gpa}%</p>`;
                }
            }
            
            educationHTML += `
                <h3>${degree} - ${institution}</h3>
                <p><em>${duration}</em></p>
                ${gpaText}
            `;
            hasEducation = true;
        }
    });
    
    if (hasEducation) {
        const educationSection = document.createElement('section');
        educationSection.innerHTML = educationHTML;
        resume.appendChild(educationSection);
    }
    
    // Update certifications (from Achievements section)
    const certificationItems = document.querySelectorAll('.certification-item');
    let hasCertifications = false;
    let certificationsHTML = '<div class="section-title">Certifications</div><ul>';
    
    certificationItems.forEach(item => {
        const certName = item.querySelector('.certName').value;
        const certOrg = item.querySelector('.certOrg').value;
        
        if (certName) {
            const certMonth = item.querySelector('.certMonth').value;
            const certYear = item.querySelector('.certYear').value;
            const certDateFormatted = (certMonth && certYear) ? `${certMonth} ${certYear}` : '';
            certificationsHTML += `<li>${certName} - ${certOrg} ${certDateFormatted ? `(${certDateFormatted})` : ''}</li>`;
            hasCertifications = true;
        }
    });
    
    certificationsHTML += '</ul>';
    
    if (hasCertifications) {
        const certificationsSection = document.createElement('section');
        certificationsSection.innerHTML = certificationsHTML;
        resume.appendChild(certificationsSection);
    }
    
    // Update awards
    const awardItems = document.querySelectorAll('.award-item');
    let hasAwards = false;
    let awardsHTML = '<div class="section-title">Awards & Achievements</div><ul>';
    
    awardItems.forEach(item => {
        const awardTitle = item.querySelector('.awardTitle').value;
        const awardIssuer = item.querySelector('.awardIssuer').value;
        
        if (awardTitle) {
            const awardMonth = item.querySelector('.awardMonth').value;
            const awardYear = item.querySelector('.awardYear').value;
            const awardDateFormatted = (awardMonth && awardYear) ? `${awardMonth} ${awardYear}` : '';
            awardsHTML += `<li>${awardTitle} - ${awardIssuer} ${awardDateFormatted ? `(${awardDateFormatted})` : ''}</li>`;
            hasAwards = true;
        }
    });
    
    awardsHTML += '</ul>';
    
    if (hasAwards) {
        const awardsSection = document.createElement('section');
        awardsSection.innerHTML = awardsHTML;
        resume.appendChild(awardsSection);
    }
    
    // Update strengths
    const strengths = document.getElementById('strengths').value;
    if (strengths) {
        const strengthsSection = document.createElement('section');
        strengthsSection.innerHTML = `
            <div class="section-title">Strengths</div>
            <p>${strengths}</p>
        `;
        resume.appendChild(strengthsSection);
    }
    
    // Update languages
    const languageItems = document.querySelectorAll('.language-item');
    let hasLanguages = false;
    let languagesHTML = '<div class="section-title">Languages</div><ul>';
    
    languageItems.forEach(item => {
        const langName = item.querySelector('.languageName').value;
        const proficiency = item.querySelector('.proficiency').value;
        
        if (langName) {
            languagesHTML += `<li>${langName}${proficiency ? ` - ${proficiency}` : ''}</li>`;
            hasLanguages = true;
        }
    });
    
    languagesHTML += '</ul>';
    
    if (hasLanguages) {
        const languagesSection = document.createElement('section');
        languagesSection.innerHTML = languagesHTML;
        resume.appendChild(languagesSection);
    }
    
    // Update interests (always last)
    const interests = document.getElementById('interests').value;
    if (interests) {
        const interestsSection = document.createElement('section');
        interestsSection.innerHTML = `
            <div class="section-title">Interests</div>
            <p>${interests}</p>
        `;
        resume.appendChild(interestsSection);
    }
}

function generateFilename() {
    const name = document.getElementById('fullName').value || 'Rajesh_Kumar';
    const jobTitle = document.getElementById('jobTitle').value || '';
    
    let filename = name.replace(/[^a-zA-Z0-9]/g, '_');
    if (jobTitle) {
        filename += '_' + jobTitle.replace(/[^a-zA-Z0-9]/g, '_');
    }
    filename += '_Resume.pdf';
    
    return filename;
}

function downloadPDF() {
    // Show loading indicator
    const downloadBtn = document.querySelector('button[onclick="downloadPDF()"]');
    const originalText = downloadBtn.textContent;
    downloadBtn.textContent = 'Generating PDF...';
    downloadBtn.disabled = true;
    
    const element = document.getElementById('resume');
    
    // Create a temporary container for PDF generation
    const tempContainer = document.createElement('div');
    tempContainer.style.cssText = `
        position: fixed;
        top: -9999px;
        left: -9999px;
        width: 210mm;
        background: white;
        font-family: Arial, sans-serif;
        color: #2c3e50;
        line-height: 1.6;
        padding: 20px;
        box-sizing: border-box;
    `;
    
    // Clone the resume content
    const clone = element.cloneNode(true);
    clone.style.cssText = `
        width: 100%;
        max-width: none;
        margin: 0;
        padding: 0;
        box-shadow: none;
        background: white;
        font-size: 11pt;
        line-height: 1.6;
        border-radius: 0;
        transform: none;
    `;
    
    // Apply template-specific styles with exact CSS
    const currentTemplate = document.getElementById('templateSelector').value;
    
    if (currentTemplate.includes('template1')) {
        // Modern Minimalist
        const header = clone.querySelector('.header');
        if (header) {
            header.style.cssText = `
                border-bottom: 3px solid #3498db;
                padding-bottom: 20px;
                margin-bottom: 30px;
            `;
        }
        
        const name = clone.querySelector('.name');
        if (name) {
            name.style.cssText = `
                font-size: 2.8em;
                font-weight: 300;
                color: #2c3e50;
                letter-spacing: -1px;
                margin: 0;
            `;
        }
        
        const contact = clone.querySelector('.contact');
        if (contact) {
            contact.style.cssText = `
                color: #7f8c8d;
                font-size: 1em;
                margin-top: 10px;
            `;
        }
        
        const sectionTitles = clone.querySelectorAll('.section-title');
        sectionTitles.forEach(title => {
            title.style.cssText = `
                background: #3498db;
                color: #fff;
                padding: 8px 15px;
                font-size: 1.1em;
                font-weight: 600;
                margin: 25px 0 15px 0;
                text-transform: uppercase;
                letter-spacing: 1px;
            `;
        });
        
        const sections = clone.querySelectorAll('section');
        sections.forEach(section => {
            section.style.marginBottom = '25px';
            const children = section.querySelectorAll('h3, p, ul');
            children.forEach(child => {
                if (!child.style.marginLeft) {
                    child.style.marginLeft = '20px';
                }
            });
        });
        
        const h3s = clone.querySelectorAll('h3');
        h3s.forEach(h3 => {
            h3.style.cssText = `
                color: #2c3e50;
                font-weight: 600;
                margin-bottom: 5px;
            `;
        });
        
        const paragraphs = clone.querySelectorAll('p, li');
        paragraphs.forEach(p => {
            p.style.cssText = `
                color: #34495e;
                font-size: 0.95em;
            `;
        });
        
        const lists = clone.querySelectorAll('ul');
        lists.forEach(ul => {
            ul.style.paddingLeft = '20px';
        });
        
    } else if (currentTemplate.includes('template2')) {
        // Executive Professional
        clone.style.borderLeft = '6px solid #2b6cb0';
        clone.style.paddingLeft = '25px';
        
        const header = clone.querySelector('.header');
        if (header) {
            header.style.cssText = `
                border-bottom: 2px solid #e2e8f0;
                padding-bottom: 20px;
                margin-bottom: 30px;
            `;
        }
        
        const name = clone.querySelector('.name');
        if (name) {
            name.style.cssText = `
                font-size: 2.5em;
                font-weight: 700;
                color: #1a202c;
                margin: 0;
            `;
        }
        
        const sectionTitles = clone.querySelectorAll('.section-title');
        sectionTitles.forEach(title => {
            title.style.cssText = `
                background: #2b6cb0;
                color: #fff;
                padding: 10px 15px;
                font-size: 1.1em;
                font-weight: 600;
                margin: 25px 0 15px 0;
                text-transform: uppercase;
            `;
        });
        
        const h3s = clone.querySelectorAll('h3');
        h3s.forEach(h3 => {
            h3.style.cssText = `
                border-left: 3px solid #bee3f8;
                padding-left: 10px;
                color: #2d3748;
                font-weight: 600;
                margin-bottom: 5px;
            `;
        });
        
    } else if (currentTemplate.includes('template3')) {
        // Creative Designer
        clone.style.cssText += `
            border-left: 6px solid #6366f1;
            font-family: 'Inter', 'Segoe UI', sans-serif;
        `;
        
        const header = clone.querySelector('.header');
        if (header) {
            header.style.cssText = `
                text-align: left;
                padding: 25px 30px;
                margin-bottom: 35px;
                background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
                border-radius: 12px;
                position: relative;
                border-top: 4px solid #6366f1;
            `;
        }
        
        const name = clone.querySelector('.name');
        if (name) {
            name.style.cssText = `
                font-size: 2.5em;
                font-weight: 700;
                color: #1a202c;
                margin-bottom: 8px;
                letter-spacing: -0.5px;
            `;
        }
        
        const contact = clone.querySelector('.contact');
        if (contact) {
            contact.style.cssText = `
                color: #64748b;
                font-size: 1em;
                font-weight: 500;
            `;
        }
        
        const sectionTitles = clone.querySelectorAll('.section-title');
        sectionTitles.forEach(title => {
            title.style.cssText = `
                color: #6366f1;
                font-size: 1.2em;
                font-weight: 700;
                margin: 30px 0 20px 0;
                padding: 12px 20px;
                background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
                border-left: 4px solid #6366f1;
                border-radius: 0 8px 8px 0;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            `;
        });
        
        const h3s = clone.querySelectorAll('h3');
        h3s.forEach(h3 => {
            h3.style.cssText = `
                color: #374151;
                font-weight: 600;
                margin-bottom: 8px;
                font-size: 1.1em;
                position: relative;
                padding-left: 20px;
            `;
            // Add bullet point
            h3.innerHTML = '• ' + h3.innerHTML;
        });
        
        const paragraphs = clone.querySelectorAll('p, li');
        paragraphs.forEach(p => {
            p.style.cssText = `
                color: #4b5563;
                font-size: 0.95em;
                margin: 6px 0;
                line-height: 1.6;
            `;
        });
        
    } else if (currentTemplate.includes('template4')) {
        // Classic Elegant
        clone.style.cssText += `
            border-right: 3px double #8b4513;
            font-family: 'Times New Roman', serif;
            padding-right: 25px;
        `;
        
        const header = clone.querySelector('.header');
        if (header) {
            header.style.cssText = `
                text-align: center;
                border-bottom: 2px solid #8b4513;
                padding-bottom: 20px;
                margin-bottom: 30px;
            `;
        }
        
        const name = clone.querySelector('.name');
        if (name) {
            name.style.cssText = `
                font-size: 2.8em;
                font-weight: 400;
                color: #8b4513;
                font-family: 'Times New Roman', serif;
                margin: 0;
            `;
        }
        
        const sectionTitles = clone.querySelectorAll('.section-title');
        sectionTitles.forEach(title => {
            title.style.cssText = `
                border-top: 1px solid #d2b48c;
                border-bottom: 1px solid #d2b48c;
                color: #8b4513;
                padding: 8px 0;
                font-size: 1.2em;
                font-weight: 600;
                margin: 25px 0 15px 0;
                text-transform: uppercase;
                text-align: center;
                font-family: 'Times New Roman', serif;
            `;
        });
        
    } else if (currentTemplate.includes('template5')) {
        // Modern Clean
        clone.style.cssText += `
            border-top: 8px solid #e53e3e;
            font-family: 'Segoe UI', Tahoma, sans-serif;
        `;
        
        const header = clone.querySelector('.header');
        if (header) {
            header.style.cssText = `
                text-align: center;
                margin-bottom: 40px;
                padding: 30px 0;
                background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
                border-radius: 10px;
            `;
        }
        
        const name = clone.querySelector('.name');
        if (name) {
            name.style.cssText = `
                font-size: 2.8em;
                font-weight: 300;
                color: #2d3748;
                margin-bottom: 10px;
                letter-spacing: -0.5px;
            `;
        }
        
        const contact = clone.querySelector('.contact');
        if (contact) {
            contact.style.cssText = `
                color: #718096;
                font-size: 1em;
                font-weight: 400;
            `;
        }
        
        const sectionTitles = clone.querySelectorAll('.section-title');
        sectionTitles.forEach(title => {
            title.style.cssText = `
                color: #e53e3e;
                font-size: 1.3em;
                font-weight: 600;
                margin: 30px 0 20px 0;
                padding-bottom: 8px;
                border-bottom: 2px solid #e53e3e;
                position: relative;
            `;
        });
        
        const h3s = clone.querySelectorAll('h3');
        h3s.forEach(h3 => {
            h3.style.cssText = `
                color: #2d3748;
                font-weight: 600;
                margin-bottom: 8px;
                font-size: 1.1em;
            `;
        });
        
        const paragraphs = clone.querySelectorAll('p, li');
        paragraphs.forEach(p => {
            p.style.cssText = `
                color: #4a5568;
                font-size: 0.95em;
                margin: 8px 0;
            `;
        });
        
    } else {
        // Original template
        const header = clone.querySelector('.header');
        if (header) {
            header.style.cssText = `
                border-bottom: 2px solid #57688a;
                padding-bottom: 20px;
                margin-bottom: 30px;
            `;
        }
        
        const name = clone.querySelector('.name');
        if (name) {
            name.style.cssText = `
                font-size: 2.5em;
                font-weight: 600;
                color: #2c3e50;
                margin: 0;
            `;
        }
        
        const sectionTitles = clone.querySelectorAll('.section-title');
        sectionTitles.forEach(title => {
            title.style.cssText = `
                background: #57688a;
                color: #fff;
                padding: 8px 15px;
                font-size: 1.1em;
                font-weight: 600;
                margin: 25px 0 15px 0;
                text-transform: uppercase;
            `;
        });
    }
    
    // Add common styles for all templates
    const allH3s = clone.querySelectorAll('h3');
    allH3s.forEach(h3 => {
        if (!h3.style.cssText) {
            h3.style.cssText = `
                font-weight: 600;
                margin-bottom: 5px;
                page-break-after: avoid;
            `;
        }
    });
    
    const allParagraphs = clone.querySelectorAll('p');
    allParagraphs.forEach(p => {
        if (!p.style.color) {
            p.style.fontSize = '0.95em';
        }
    });
    
    const allLists = clone.querySelectorAll('ul');
    allLists.forEach(ul => {
        if (!ul.style.paddingLeft) {
            ul.style.paddingLeft = '20px';
        }
    });
    
    const allSections = clone.querySelectorAll('section');
    allSections.forEach(section => {
        if (!section.style.marginBottom) {
            section.style.marginBottom = '25px';
        }
    });
    
    // Add to document temporarily
    tempContainer.appendChild(clone);
    document.body.appendChild(tempContainer);
    
    const opt = {
        margin: [10, 10, 10, 10],
        filename: generateFilename(),
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            scrollY: 0,
            allowTaint: true,
            backgroundColor: '#ffffff'
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        },
        pagebreak: { mode: ['css', 'legacy'] }
    };
    
    html2pdf().set(opt).from(clone).save().then(() => {
        // Clean up
        if (document.body.contains(tempContainer)) {
            document.body.removeChild(tempContainer);
        }
        // Reset button
        downloadBtn.textContent = originalText;
        downloadBtn.disabled = false;
    }).catch((error) => {
        console.error('PDF generation failed:', error);
        alert('PDF generation failed. Please try again or use the Print PDF option.');
        // Clean up even if there's an error
        if (document.body.contains(tempContainer)) {
            document.body.removeChild(tempContainer);
        }
        // Reset button
        downloadBtn.textContent = originalText;
        downloadBtn.disabled = false;
    });
}

function downloadDOC() {
    // Show loading indicator
    const downloadBtn = document.querySelector('button[onclick="downloadDOC()"]');
    const originalText = downloadBtn.textContent;
    downloadBtn.textContent = 'Generating DOC...';
    downloadBtn.disabled = true;
    
    const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle, Table, TableRow, TableCell, WidthType, Header, Footer } = docx;
    
    const name = document.getElementById('fullName').value || 'Rajesh Kumar';
    const jobTitle = document.getElementById('jobTitle').value;
    const email = document.getElementById('email').value || 'email@example.com';
    const phone = document.getElementById('phone').value || '+123 456 7890';
    const linkName1 = document.getElementById('linkName1').value;
    const linkUrl1 = document.getElementById('linkUrl1').value;
    const linkName2 = document.getElementById('linkName2').value;
    const linkUrl2 = document.getElementById('linkUrl2').value;
    const location = document.getElementById('location').value || 'City, Country';
    const summary = document.getElementById('summary').value;
    
    // Get current template for color scheme
    const currentTemplate = document.getElementById('templateSelector').value;
    let primaryColor = "3498db"; // Default blue
    
    if (currentTemplate.includes('template1')) primaryColor = "3498db"; // Blue
    else if (currentTemplate.includes('template2')) primaryColor = "2b6cb0"; // Dark blue
    else if (currentTemplate.includes('template3')) primaryColor = "6366f1"; // Indigo
    else if (currentTemplate.includes('template4')) primaryColor = "8b4513"; // Brown
    else if (currentTemplate.includes('template5')) primaryColor = "e53e3e"; // Red
    else primaryColor = "57688a"; // Original blue-gray
    
    const children = [];
    
    // Header with template-specific styling
    let headerBorder = {};
    
    if (currentTemplate.includes('template1')) {
        headerBorder = {
            bottom: {
                color: primaryColor,
                space: 1,
                style: BorderStyle.SINGLE,
                size: 18
            }
        };
    } else if (currentTemplate.includes('template2')) {
        headerBorder = {
            bottom: {
                color: "e2e8f0",
                space: 1,
                style: BorderStyle.SINGLE,
                size: 12
            }
        };
    } else if (currentTemplate.includes('template4')) {
        headerBorder = {
            bottom: {
                color: primaryColor,
                space: 1,
                style: BorderStyle.SINGLE,
                size: 12
            }
        };
    } else {
        headerBorder = {
            bottom: {
                color: primaryColor,
                space: 1,
                style: BorderStyle.SINGLE,
                size: 12
            }
        };
    }
    
    children.push(
        new Paragraph({
            children: [new TextRun({ 
                text: name, 
                bold: true, 
                size: 36, 
                color: primaryColor,
                font: "Arial"
            })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
            border: headerBorder
        })
    );
    
    if (jobTitle) {
        children.push(
            new Paragraph({
                children: [new TextRun({ 
                    text: jobTitle, 
                    size: 24, 
                    color: "666666",
                    italics: true,
                    font: "Arial"
                })],
                alignment: AlignmentType.CENTER,
                spacing: { after: 200 }
            })
        );
    }
    
    // Contact information with styling
    let contactInfo = `${email} | ${phone}`;
    if (linkName1 && linkUrl1) {
        contactInfo += ` | ${linkName1}: ${linkUrl1}`;
    }
    if (linkName2 && linkUrl2) {
        contactInfo += ` | ${linkName2}: ${linkUrl2}`;
    }
    contactInfo += ` | ${location}`;
    
    children.push(
        new Paragraph({
            children: [new TextRun({ 
                text: contactInfo, 
                size: 20,
                color: "4a5568",
                font: "Arial"
            })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 }
        })
    );
    
    // Professional Summary with styled header
    if (summary && summary !== 'Professional summary will appear here...') {
        children.push(
            new Paragraph({
                children: [new TextRun({ 
                    text: "PROFESSIONAL SUMMARY", 
                    bold: true, 
                    size: 24,
                    color: currentTemplate.includes('template4') ? primaryColor : "ffffff",
                    font: "Arial"
                })],
                spacing: { before: 300, after: 200 },
                shading: {
                    fill: currentTemplate.includes('template4') ? "f8f9fa" : primaryColor
                },
                border: currentTemplate.includes('template4') ? {
                    top: { color: "d2b48c", style: BorderStyle.SINGLE, size: 6 },
                    bottom: { color: "d2b48c", style: BorderStyle.SINGLE, size: 6 }
                } : {}
            }),
            new Paragraph({
                children: [new TextRun({ 
                    text: summary, 
                    size: 22,
                    color: "2d3748",
                    font: "Arial"
                })],
                spacing: { after: 300 }
            })
        );
    }
    
    // Skills with enhanced formatting
    const skillItems = document.querySelectorAll('.skill-item');
    let hasSkills = false;
    
    skillItems.forEach(item => {
        const category = item.querySelector('.skillCategory').value;
        const skills = item.querySelector('.skillList').value;
        
        if (category && skills) {
            if (!hasSkills) {
                children.push(
                    new Paragraph({
                        children: [new TextRun({ 
                            text: "SKILLS", 
                            bold: true, 
                            size: 24,
                            color: currentTemplate.includes('template4') ? primaryColor : "ffffff",
                            font: "Arial"
                        })],
                        spacing: { before: 300, after: 200 },
                        shading: {
                            fill: currentTemplate.includes('template4') ? "f8f9fa" : primaryColor
                        },
                        border: currentTemplate.includes('template4') ? {
                            top: { color: "d2b48c", style: BorderStyle.SINGLE, size: 6 },
                            bottom: { color: "d2b48c", style: BorderStyle.SINGLE, size: 6 }
                        } : {}
                    })
                );
                hasSkills = true;
            }
            children.push(
                new Paragraph({
                    children: [
                        new TextRun({ 
                            text: `${category}: `, 
                            size: 22, 
                            bold: true,
                            color: "2d3748",
                            font: "Arial"
                        }),
                        new TextRun({ 
                            text: skills, 
                            size: 22,
                            color: "4a5568",
                            font: "Arial"
                        })
                    ],
                    spacing: { after: 100 }
                })
            );
        }
    });
    
    // Work Experience with enhanced styling
    const experienceItems = document.querySelectorAll('.experience-item');
    let hasExperience = false;
    
    experienceItems.forEach(item => {
        const jobTitle = item.querySelector('.jobTitle').value;
        const companyName = item.querySelector('.companyName').value;
        const currentJob = item.querySelector('.currentJob').checked;
        const responsibilities = item.querySelector('.responsibilities').value;
        
        if (jobTitle || companyName) {
            if (!hasExperience) {
                children.push(
                    new Paragraph({
                        children: [new TextRun({ 
                            text: "WORK EXPERIENCE", 
                            bold: true, 
                            size: 24,
                            color: currentTemplate.includes('template4') ? primaryColor : "ffffff",
                            font: "Arial"
                        })],
                        spacing: { before: 300, after: 200 },
                        shading: {
                            fill: currentTemplate.includes('template4') ? "f8f9fa" : primaryColor
                        },
                        border: currentTemplate.includes('template4') ? {
                            top: { color: "d2b48c", style: BorderStyle.SINGLE, size: 6 },
                            bottom: { color: "d2b48c", style: BorderStyle.SINGLE, size: 6 }
                        } : {}
                    })
                );
                hasExperience = true;
            }
            
            let duration = '';
            const startDate = item.querySelector('.startDate').value;
            const endDate = item.querySelector('.endDate').value;
            
            if (startDate) {
                const start = formatDate(startDate);
                const end = currentJob ? 'Present' : (endDate ? formatDate(endDate) : '');
                duration = ` (${start} - ${end})`;
            }
            
            const jobHeader = companyName ? `${jobTitle} - ${companyName}` : jobTitle;
            children.push(
                new Paragraph({
                    children: [
                        new TextRun({ 
                            text: jobHeader, 
                            bold: true, 
                            size: 22,
                            color: "2d3748",
                            font: "Arial"
                        }),
                        new TextRun({ 
                            text: duration, 
                            size: 20,
                            color: "718096",
                            italics: true,
                            font: "Arial"
                        })
                    ],
                    spacing: { after: 100 }
                })
            );
            
            if (responsibilities) {
                responsibilities.split('\n').forEach(resp => {
                    if (resp.trim()) {
                        children.push(
                            new Paragraph({
                                children: [new TextRun({ 
                                    text: `• ${resp.trim()}`, 
                                    size: 20,
                                    color: "4a5568",
                                    font: "Arial"
                                })],
                                spacing: { after: 100 }
                            })
                        );
                    }
                });
            }
        }
    });
    
    // Projects with styling
    const projectItems = document.querySelectorAll('.project-item');
    let hasProjects = false;
    
    projectItems.forEach(item => {
        const projectName = item.querySelector('.projectName').value;
        const projectTech = item.querySelector('.projectTech').value;
        const projectDesc = item.querySelector('.projectDesc').value;
        const projectLink = item.querySelector('.projectLink').value;
        
        if (projectName) {
            if (!hasProjects) {
                children.push(
                    new Paragraph({
                        children: [new TextRun({ 
                            text: "PROJECTS", 
                            bold: true, 
                            size: 24,
                            color: primaryColor,
                            font: "Arial"
                        })],
                        spacing: { before: 300, after: 200 },
                        shading: {
                            fill: "f8f9fa"
                        }
                    })
                );
                hasProjects = true;
            }
            
            children.push(
                new Paragraph({
                    children: [new TextRun({ 
                        text: projectName, 
                        bold: true, 
                        size: 22,
                        color: "2d3748",
                        font: "Arial"
                    })],
                    spacing: { after: 100 }
                })
            );
            
            if (projectTech) {
                children.push(
                    new Paragraph({
                        children: [
                            new TextRun({ 
                                text: "Technologies: ", 
                                size: 20, 
                                bold: true,
                                color: "4a5568",
                                font: "Arial"
                            }),
                            new TextRun({ 
                                text: projectTech, 
                                size: 20, 
                                italics: true,
                                color: "718096",
                                font: "Arial"
                            })
                        ],
                        spacing: { after: 100 }
                    })
                );
            }
            
            if (projectDesc) {
                children.push(
                    new Paragraph({
                        children: [new TextRun({ 
                            text: projectDesc, 
                            size: 20,
                            color: "4a5568",
                            font: "Arial"
                        })],
                        spacing: { after: 100 }
                    })
                );
            }
            
            if (projectLink) {
                children.push(
                    new Paragraph({
                        children: [
                            new TextRun({ 
                                text: "Link: ", 
                                size: 20, 
                                bold: true,
                                color: "4a5568",
                                font: "Arial"
                            }),
                            new TextRun({ 
                                text: projectLink, 
                                size: 20,
                                color: primaryColor,
                                underline: {},
                                font: "Arial"
                            })
                        ],
                        spacing: { after: 200 }
                    })
                );
            }
        }
    });
    
    // Education with styling
    const educationItems = document.querySelectorAll('.education-item');
    let hasEducation = false;
    
    educationItems.forEach(item => {
        const institution = item.querySelector('.institution').value;
        const degree = item.querySelector('.degree').value;
        const gpa = item.querySelector('.gpa').value;
        
        if (institution || degree) {
            if (!hasEducation) {
                children.push(
                    new Paragraph({
                        children: [new TextRun({ 
                            text: "EDUCATION", 
                            bold: true, 
                            size: 24,
                            color: primaryColor,
                            font: "Arial"
                        })],
                        spacing: { before: 300, after: 200 },
                        shading: {
                            fill: "f8f9fa"
                        }
                    })
                );
                hasEducation = true;
            }
            
            let duration = '';
            const startDate = item.querySelector('.eduStartDate').value;
            const endDate = item.querySelector('.eduEndDate').value;
            
            if (startDate && endDate) {
                duration = ` (${formatDate(startDate)} - ${formatDate(endDate)})`;
            }
            
            children.push(
                new Paragraph({
                    children: [
                        new TextRun({ 
                            text: `${degree} - ${institution}`, 
                            bold: true, 
                            size: 22,
                            color: "2d3748",
                            font: "Arial"
                        }),
                        new TextRun({ 
                            text: duration, 
                            size: 20,
                            color: "718096",
                            italics: true,
                            font: "Arial"
                        })
                    ],
                    spacing: { after: 100 }
                })
            );
            
            if (gpa) {
                const gpaValue = parseFloat(gpa);
                const gpaText = gpaValue <= 10 ? `GPA: ${gpa}` : `Percentage: ${gpa}%`;
                children.push(
                    new Paragraph({
                        children: [new TextRun({ 
                            text: gpaText, 
                            size: 20,
                            color: "4a5568",
                            font: "Arial"
                        })],
                        spacing: { after: 200 }
                    })
                );
            }
        }
    });
    
    // Certifications with styling
    const certificationItems = document.querySelectorAll('.certification-item');
    let hasCertifications = false;
    
    certificationItems.forEach(item => {
        const certName = item.querySelector('.certName').value;
        const certOrg = item.querySelector('.certOrg').value;
        
        if (certName) {
            if (!hasCertifications) {
                children.push(
                    new Paragraph({
                        children: [new TextRun({ 
                            text: "CERTIFICATIONS", 
                            bold: true, 
                            size: 24,
                            color: primaryColor,
                            font: "Arial"
                        })],
                        spacing: { before: 300, after: 200 },
                        shading: {
                            fill: "f8f9fa"
                        }
                    })
                );
                hasCertifications = true;
            }
            
            const certMonth = item.querySelector('.certMonth').value;
            const certYear = item.querySelector('.certYear').value;
            const certDateFormatted = (certMonth && certYear) ? ` (${certMonth} ${certYear})` : '';
            
            children.push(
                new Paragraph({
                    children: [new TextRun({ 
                        text: `• ${certName} - ${certOrg}${certDateFormatted}`, 
                        size: 20,
                        color: "4a5568",
                        font: "Arial"
                    })],
                    spacing: { after: 100 }
                })
            );
        }
    });
    
    // Add Awards, Strengths, Languages, and Interests sections
    const awardItems = document.querySelectorAll('.award-item');
    let hasAwards = false;
    
    awardItems.forEach(item => {
        const awardTitle = item.querySelector('.awardTitle').value;
        const awardIssuer = item.querySelector('.awardIssuer').value;
        
        if (awardTitle) {
            if (!hasAwards) {
                children.push(
                    new Paragraph({
                        children: [new TextRun({ 
                            text: "AWARDS & ACHIEVEMENTS", 
                            bold: true, 
                            size: 24,
                            color: primaryColor,
                            font: "Arial"
                        })],
                        spacing: { before: 300, after: 200 },
                        shading: {
                            fill: "f8f9fa"
                        }
                    })
                );
                hasAwards = true;
            }
            
            const awardMonth = item.querySelector('.awardMonth').value;
            const awardYear = item.querySelector('.awardYear').value;
            const awardDateFormatted = (awardMonth && awardYear) ? ` (${awardMonth} ${awardYear})` : '';
            
            children.push(
                new Paragraph({
                    children: [new TextRun({ 
                        text: `• ${awardTitle} - ${awardIssuer}${awardDateFormatted}`, 
                        size: 20,
                        color: "4a5568",
                        font: "Arial"
                    })],
                    spacing: { after: 100 }
                })
            );
        }
    });
    
    // Strengths
    const strengths = document.getElementById('strengths').value;
    if (strengths) {
        children.push(
            new Paragraph({
                children: [new TextRun({ 
                    text: "STRENGTHS", 
                    bold: true, 
                    size: 24,
                    color: primaryColor,
                    font: "Arial"
                })],
                spacing: { before: 300, after: 200 },
                shading: {
                    fill: "f8f9fa"
                }
            }),
            new Paragraph({
                children: [new TextRun({ 
                    text: strengths, 
                    size: 20,
                    color: "4a5568",
                    font: "Arial"
                })],
                spacing: { after: 200 }
            })
        );
    }
    
    // Languages
    const languageItems = document.querySelectorAll('.language-item');
    let hasLanguages = false;
    
    languageItems.forEach(item => {
        const langName = item.querySelector('.languageName').value;
        const proficiency = item.querySelector('.proficiency').value;
        
        if (langName) {
            if (!hasLanguages) {
                children.push(
                    new Paragraph({
                        children: [new TextRun({ 
                            text: "LANGUAGES", 
                            bold: true, 
                            size: 24,
                            color: primaryColor,
                            font: "Arial"
                        })],
                        spacing: { before: 300, after: 200 },
                        shading: {
                            fill: "f8f9fa"
                        }
                    })
                );
                hasLanguages = true;
            }
            
            children.push(
                new Paragraph({
                    children: [new TextRun({ 
                        text: `• ${langName}${proficiency ? ` - ${proficiency}` : ''}`, 
                        size: 20,
                        color: "4a5568",
                        font: "Arial"
                    })],
                    spacing: { after: 100 }
                })
            );
        }
    });
    
    // Interests
    const interests = document.getElementById('interests').value;
    if (interests) {
        children.push(
            new Paragraph({
                children: [new TextRun({ 
                    text: "INTERESTS", 
                    bold: true, 
                    size: 24,
                    color: primaryColor,
                    font: "Arial"
                })],
                spacing: { before: 300, after: 200 },
                shading: {
                    fill: "f8f9fa"
                }
            }),
            new Paragraph({
                children: [new TextRun({ 
                    text: interests, 
                    size: 20,
                    color: "4a5568",
                    font: "Arial"
                })],
                spacing: { after: 200 }
            })
        );
    }
    
    const doc = new Document({
        sections: [{ 
            properties: {
                page: {
                    margin: {
                        top: 720,
                        right: 720,
                        bottom: 720,
                        left: 720
                    }
                }
            },
            children: children 
        }]
    });
    
    const filename = generateFilename().replace('.pdf', '.docx');
    
    Packer.toBlob(doc).then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        // Reset button
        downloadBtn.textContent = originalText;
        downloadBtn.disabled = false;
    }).catch((error) => {
        console.error('DOC generation failed:', error);
        alert('DOC generation failed. Please try again.');
        
        // Reset button
        downloadBtn.textContent = originalText;
        downloadBtn.disabled = false;
    });
}

// Populate year and month dropdowns
function populateYears() {
    const currentYear = new Date().getFullYear();
    const yearSelects = document.querySelectorAll('select[class*="Year"]');
    
    yearSelects.forEach(select => {
        select.innerHTML = '<option value="">Year</option>';
        for (let year = currentYear + 2; year >= currentYear - 50; year--) {
            select.innerHTML += `<option value="${year}">${year}</option>`;
        }
    });
}

function populateMonths() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthSelects = document.querySelectorAll('select[class*="Month"]');
    
    monthSelects.forEach(select => {
        select.innerHTML = '<option value="">Month</option>';
        months.forEach(month => {
            select.innerHTML += `<option value="${month}">${month}</option>`;
        });
    });
}

function setupAutocomplete(input, suggestions) {
    const container = document.createElement('div');
    container.className = 'autocomplete-container';
    input.parentNode.insertBefore(container, input);
    container.appendChild(input);
    
    const dropdown = document.createElement('div');
    dropdown.className = 'autocomplete-dropdown';
    container.appendChild(dropdown);
    
    let selectedIndex = -1;
    
    input.addEventListener('input', function() {
        const value = this.value.toLowerCase();
        dropdown.innerHTML = '';
        selectedIndex = -1;
        
        if (value.length === 0) {
            dropdown.style.display = 'none';
            return;
        }
        
        const filtered = suggestions.filter(item => 
            item.toLowerCase().includes(value)
        ).slice(0, 8);
        
        if (filtered.length === 0) {
            dropdown.style.display = 'none';
            return;
        }
        
        filtered.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'autocomplete-item';
            div.textContent = item;
            div.addEventListener('click', () => {
                input.value = item;
                dropdown.style.display = 'none';
                generateResume();
            });
            dropdown.appendChild(div);
        });
        
        dropdown.style.display = 'block';
    });
    
    input.addEventListener('keydown', function(e) {
        const items = dropdown.querySelectorAll('.autocomplete-item');
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
            updateSelection(items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIndex = Math.max(selectedIndex - 1, -1);
            updateSelection(items);
        } else if (e.key === 'Enter' && selectedIndex >= 0) {
            e.preventDefault();
            items[selectedIndex].click();
        } else if (e.key === 'Escape') {
            dropdown.style.display = 'none';
            selectedIndex = -1;
        }
    });
    
    function updateSelection(items) {
        items.forEach((item, index) => {
            item.classList.toggle('selected', index === selectedIndex);
        });
    }
    
    document.addEventListener('click', function(e) {
        if (!container.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });
}

// Mobile preview toggle
function togglePreview() {
    const previewSection = document.querySelector('.preview-section');
    const toggleBtn = document.getElementById('previewToggle');
    
    if (previewSection.classList.contains('show')) {
        previewSection.classList.remove('show');
        if (toggleBtn) toggleBtn.title = 'Show Preview';
    } else {
        previewSection.classList.add('show');
        if (toggleBtn) toggleBtn.title = 'Hide Preview';
        previewSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    populateYears();
    populateMonths();
    // Setup autocomplete for existing inputs
    const jobTitleInput = document.querySelector('.jobTitle');
    const companyInput = document.querySelector('.companyName');
    
    if (jobTitleInput) setupAutocomplete(jobTitleInput, jobTitles);
    if (companyInput) setupAutocomplete(companyInput, companies);
    
    // Set default template or check for selected template from templates page
    const selectedTemplate = localStorage.getItem('selectedTemplate');
    if (selectedTemplate) {
        document.getElementById('templateSelector').value = `templates/${selectedTemplate}`;
        document.getElementById('resumeStyle').href = `templates/${selectedTemplate}`;
        localStorage.removeItem('selectedTemplate');
    } else {
        // Set default template to Modern Minimalist
        document.getElementById('templateSelector').value = 'templates/template1.css';
        document.getElementById('resumeStyle').href = 'templates/template1.css';
    }
    
    // Add phone validation
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^+0-9\s\(\)\-]/g, '');
    });
    phoneInput.addEventListener('keypress', function(e) {
        const char = String.fromCharCode(e.which);
        if (!/[+0-9\s\(\)\-]/.test(char)) {
            e.preventDefault();
        }
    });
    
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('input', generateResume);
        input.addEventListener('change', generateResume);
        
        // URL validation
        if (input.type === 'url') {
            input.addEventListener('input', function() {
                const value = this.value.trim();
                if (value && !value.match(/^https?:\/\/.+/)) {
                    this.setCustomValidity('Please enter a valid URL starting with http:// or https://');
                } else {
                    this.setCustomValidity('');
                }
            });
        }
        
        // Email validation
        if (input.type === 'email') {
            input.addEventListener('input', function() {
                const value = this.value.trim();
                if (value && !value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                    this.setCustomValidity('Please enter a valid email address');
                } else {
                    this.setCustomValidity('');
                }
            });
        }
        
        // Phone validation for tel inputs
        if (input.type === 'tel') {
            input.addEventListener('keypress', function(e) {
                const char = String.fromCharCode(e.which);
                if (!/[+0-9\s\(\)\-]/.test(char)) {
                    e.preventDefault();
                }
            });
        }
    });
    
    // Add current job toggle functionality for existing elements
    document.querySelectorAll('.currentJob').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const experienceItem = this.closest('.experience-item');
            const endDate = experienceItem.querySelector('.endDate');
            
            if (this.checked) {
                endDate.disabled = true;
                endDate.value = '';
            } else {
                endDate.disabled = false;
            }
            generateResume();
        });
    });
    
    // Add date validation to existing elements
    document.querySelectorAll('.experience-item').forEach(item => {
        const startDate = item.querySelector('.startDate');
        const endDate = item.querySelector('.endDate');
        if (startDate && endDate) {
            startDate.addEventListener('change', function() {
                if (endDate.value) validateDateRange(startDate, endDate);
            });
            endDate.addEventListener('change', function() {
                validateDateRange(startDate, endDate);
            });
        }
    });
    
    document.querySelectorAll('.education-item').forEach(item => {
        const startDate = item.querySelector('.eduStartDate');
        const endDate = item.querySelector('.eduEndDate');
        if (startDate && endDate) {
            startDate.addEventListener('change', function() {
                if (endDate.value) validateDateRange(startDate, endDate);
            });
            endDate.addEventListener('change', function() {
                validateDateRange(startDate, endDate);
            });
        }
    });
    
    // Generate initial resume
    generateResume();
    updateNavigation();
});
// Allow direct step navigation
function goToStep(stepNumber) {
    if (stepNumber < 1 || stepNumber > totalSteps) return;
    
    // Hide current step
    document.getElementById(`step${currentStep}`).classList.remove('active');
    document.querySelector(`.step[data-step="${currentStep}"]`).classList.remove('active');
    
    // Show new step
    currentStep = stepNumber;
    document.getElementById(`step${currentStep}`).classList.add('active');
    document.querySelector(`.step[data-step="${currentStep}"]`).classList.add('active');
    
    // Mark completed steps
    for (let i = 1; i < currentStep; i++) {
        document.querySelector(`.step[data-step="${i}"]`).classList.add('completed');
    }
    
    // Remove completed class from future steps
    for (let i = currentStep; i <= totalSteps; i++) {
        document.querySelector(`.step[data-step="${i}"]`).classList.remove('completed');
    }
    
    // Reset scroll position to top - force scroll
    setTimeout(() => {
        const formSidebar = document.querySelector('.form-sidebar');
        if (formSidebar) {
            formSidebar.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, 50);
    
    // Update navigation
    updateNavigation();
    
    // Generate resume
    generateResume();
}

// Add click handlers to step indicators
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    
    // Add click handlers to step indicators for direct navigation
    document.querySelectorAll('.step').forEach(step => {
        step.addEventListener('click', function() {
            const stepNumber = parseInt(this.getAttribute('data-step'));
            goToStep(stepNumber);
        });
        step.style.cursor = 'pointer';
    });
});
