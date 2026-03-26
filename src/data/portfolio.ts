export interface Job {
  date: string
  title: string
  org: string
  bullets: string[]
}

export interface Project {
  meta: string
  title: string
  desc: string
  tags: string[]
}

export interface EduItem {
  degree: string
  school: string
  year: string
  detail?: string
}

export const bio = {
  name: 'Maria Paraskeva',
  role: 'Data Scientist',
  tagline: 'Machine Learning · Deep Learning · MLOps · NLP',
  summary:
    'Mathematician and Data Scientist with a strong foundation in computational mathematics and hands-on experience in machine learning, deep learning, and data-driven decision-making. I focus on creating business impact through predictive models, optimization algorithms, and scalable software solutions.',
  quote: '"Without data, you\'re just another person with an opinion."',
  quoteAuthor: '— W. Edwards Deming',
  email: 'mparaskeva3103@gmail.com',
  linkedin: 'https://www.linkedin.com/in/maria-paraskeva-datascience-maths-english/',
  github: 'https://github.com/mp2b31',
  cv: './CV_MariaParaskeva_ds.pdf',
  location: 'Barcelona, Spain',
}

export const skills: string[] = [
  'Python', 'SQL', 'PyTorch', 'TensorFlow', 'Scikit-learn',
  'Docker', 'MLflow', 'HuggingFace', 'LLMs / RAG', 'NLP',
  'GANs', 'Transformers', 'Pandas', 'NumPy', 'Git',
]

export const projects: Project[] = [
  {
    meta: '// Advanced Statistical Modeling · Time Series Analysis · ARIMA',
    title: 'Advanced Time Series Modeling: Cement Consumption Forecasting in Spain',
    desc: 'Comprehensive time series analysis of apparent cement consumption in Spain (1990-2020) applying ARIMA methodology with calendar effects and outlier treatment. Built AR(2)SAR(4) models, incorporating trading days and Easter effects for improved forecasting accuracy. Implemented transformations, seasonal decomposition, and rigorous model validation.',
    tags: ['Time Series', 'ARIMA', 'Forecasting', 'Statistical Modeling', 'R'],
  },
  {
    meta: '// Machine Learning · Classification · Feature Engineering',
    title: 'Gamma Particle Classification using Kernel Methods',
    desc: 'Comprehensive ML project analyzing the Gamma Telescope dataset with multiple classification approaches. Implemented and compared kernelized SVMs (RBF, Polynomial, Histogram), Random Forests, and KNN. Performed feature engineering with PCA, outlier detection, and extensive hyperparameter tuning via cross-validation.',
    tags: ['SVM', 'Kernel Methods', 'Random Forest', 'KNN', 'ROC/PR Curves', 'R/Tidymodels'],
  },
  {
    meta: '// Deep Learning · Transfer Learning · Computer Vision',
    title: 'Neural Networks & Transfer Learning: Satellite Image Classification',
    desc: 'Multi-phase deep learning project spanning custom neural networks, transfer learning techniques, and interpretability analysis. Designed and trained binary classification models on satellite imagery with extensive hyperparameter optimization and model evaluation. Implemented different architectures exploring various activation functions and layer configurations.',
    tags: ['Deep Learning', 'Transfer Learning', 'CNN', 'Jupyter', 'PyTorch/TensorFlow'],
  },
  {
    meta: '// Machine Learning · Binary Classification · Exoplanet Detection',
    title: 'Exoplanet Classification: ML Pipeline & Neural Networks',
    desc: 'End-to-end machine learning project for classifying exoplanet candidates using Kaggle dataset. Developed comprehensive preprocessing pipeline with feature engineering, outlier handling, and normalization. Compared multiple ML models (Logistic Regression, Decision Trees, Random Forest, SVM) and implemented custom neural network for binary classification.',
    tags: ['Classification', 'Feature Engineering', 'Neural Networks', 'GridSearch', 'Python/scikit-learn'],
  },
]

export const experience: Job[] = [
  {
    date: 'Jun 2025 – Jan 2026',
    title: 'AI Engineer / Backend Developer',
    org: 'SmartWay VP',
    bullets: [
      'Developed an internal agile management tool as part of a short-term project, with plans for future commercial release.',
      'Presented educational sessions on AI to diverse audiences — from neural network fundamentals to ethical implications of AI adoption.',
    ],
  },
  {
    date: 'Sep 2020 – May 2022',
    title: 'Data Analyst',
    org: 'Transperfect',
    bullets: [
      'Member of the German team of Language Data Analysts using specific tools to improve AI systems.',
      'Member of the QA team providing meaningful feedback for project-specific non-conformances and file quality reviews.',
    ],
  },
  {
    date: '2016 – Present',
    title: 'Freelance Teacher (Greek, English, Mathematics)',
    org: 'Independent · Barcelona',
    bullets: [
      'Private mathematics tutoring to students aged 8–17.',
      'Conversational in-company English and Greek classes to adults (Volotea, Foment de Ciutat, Simon Electric, Oxfam Intermón).',
      'Greek classes to undergrad students under the Erasmus+ programme.',
    ],
  },
]

export const volunteering: Job[] = [
  {
    date: 'Mar 2025',
    title: 'Conference Volunteer',
    org: 'EDBT/ICDT 2025 Joint Conference — UPC, Barcelona',
    bullets: [
      'Assisted in organizing a university-hosted database conference, supporting event logistics, attendee coordination, and speaker sessions.',
    ],
  },
  {
    date: '2012 – 2017',
    title: 'Math & Greek Tutor',
    org: 'Rhodes, Greece (Online)',
    bullets: ['Online classes to underprivileged elementary pupils.'],
  },
]

export const education: EduItem[] = [
  {
    degree: 'MS in Data Science (120 ECTS)',
    school: 'Universitat Politècnica de Catalunya — Barcelona School of Informatics (FIB)',
    year: '2022 – 2024 · Barcelona, Spain',
  },
  {
    degree: 'BSc in Mathematics (240 ECTS)',
    school: 'University of Patras, Greece',
    year: '2011 – 2017',
    detail: 'Concentration: Computational Mathematics and Computer Science',
  },
  {
    degree: 'English Teacher Certification (120h TEFL)',
    school: 'Oxbridge TEFL, Barcelona',
    year: '2018',
    detail: 'Specialized in EAP and EOP',
  },
]

export const certifications: string[] = [
  'Coding Interview Bootcamp — Udemy (2022)',
  'Android App Development — IEEE Patras (2014–15)',
  'Intro to Psychology — SJSU (2017)',
  '"20 Minutes of Innovation" — EUROAVIA (2017)',
]

export const languages: string[] = [
  'Greek — Native',
  'English — C1',
  'Spanish — C1',
  'German — B2',
  'Catalan — A2',
]
