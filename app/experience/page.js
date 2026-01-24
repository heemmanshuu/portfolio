import Base from '../../layouts/Base';

export const metadata = {
  title: 'Experience',
  description:
    'My professional experience across industry, research, and teaching — building large-scale systems, applied ML, and mentoring students.',
  openGraph: {
    title: 'Experience // G Heemmanshuu Dasari',
    url: 'https://yourdomain.com/experience'
  }
};

export default function Experience() {
  return (
    <Base
      title="Experience // G Heemmanshuu Dasari"
      tagline="Industry. Research. Teaching."
      primaryColor="cyan"
      secondaryColor="purple"
    >
      <p>
        This page is a living record of my work across{' '}
        <strong>industry engineering</strong>,{' '}
        <strong>research</strong>, and{' '}
        <strong>teaching & volunteering</strong>.  
        Think of it as LinkedIn — but calmer, opinionated, and mine.
      </p>

      {/* ================= INDUSTRY ================= */}
      <h2>Industry</h2>

      <ExperienceItem
        role="Backend Software Engineer"
        org="Nutanix"
        period="2024 — Present"
        duration="Full-time"
      >
        <li>Worked on fault-tolerant provisioning workflows for database services.</li>
        <li>Built and maintained orchestration pipelines spanning AWS, GCP, and on-prem clusters.</li>
        <li>Focused on reliability, retries, and failure recovery in distributed systems.</li>
      </ExperienceItem>

      <ExperienceItem
        role="Software Engineer"
        org="Oracle Integration"
        period="2021 — 2023"
        duration="Full-time"
      >
        <li>Built secure, multi-tenant notification services used across Oracle customers.</li>
        <li>Designed APIs with strict backward compatibility using feature flags and caching.</li>
        <li>Led parts of a large SOA → OIC migration.</li>
      </ExperienceItem>

      <ExperienceItem
        role="NLP Intern"
        org="Oracle Digital Assistant"
        period="2020"
        duration="Internship"
      >
        <li>Built data-cleaning pipelines for vendor-provided training data.</li>
        <li>Developed multiple NER pipelines using spaCy and transformer models.</li>
        <li>Contributed to a consensus model that improved downstream intent accuracy.</li>
      </ExperienceItem>

      <ExperienceItem
        role="Software Engineering Intern"
        org="ZenoHealth"
        period="2019"
        duration="Internship"
      >
        <li>Worked on internal tools for pharmacy and logistics workflows.</li>
        <li>Gained early exposure to production systems in healthcare tech.</li>
      </ExperienceItem>

      {/* ================= RESEARCH ================= */}
      <h2>Research</h2>

      <ResearchItem
        title="Diffeomorphic Volumetric Registration"
        advisor="UC Irvine"
        period="2024 — Present"
      >
        <li>Working on constraint-safe geometric optimization for volumetric data.</li>
        <li>Exploring diffeomorphic mappings with guarantees on topology preservation.</li>
      </ResearchItem>

      <ResearchItem
        title="MERFISH Algorithm Improvements"
        advisor="UC Irvine"
        period="2024 — Present"
      >
        <li>Investigating accuracy and robustness improvements in spatial transcriptomics.</li>
        <li>Focused on algorithmic and optimization-level changes.</li>
      </ResearchItem>

      <ResearchItem
        title="Authorship Attribution & Text Analysis"
        advisor="IIT Bombay"
        period="2019 — 2020"
      >
        <li>Built syntactic graph-based feature extractors for authorship attribution.</li>
        <li>Worked with LSA, BoW, and structural NLP features.</li>
      </ResearchItem>

      {/* ================= TEACHING / VOLUNTEERING ================= */}
      <h2>Teaching & Volunteering</h2>

      <ExperienceItem
        role="Volunteer Instructor"
        org="Paathshaala Education"
        period="2018 — 2019"
      >
        <li>Taught mathematics and science to underprivileged students.</li>
        <li>Focused on fundamentals, intuition, and confidence-building.</li>
      </ExperienceItem>

      <ExperienceItem
        role="Student Volunteer"
        org="ELIT, IIT Bombay"
        period="2017 — 2018"
      >
        <li>Worked on educational outreach and student mentorship programs.</li>
        <li>Helped organize workshops and learning initiatives.</li>
      </ExperienceItem>
    </Base>
  );
}

/* ================= COMPONENTS ================= */

function ExperienceItem({ role, org, period, duration, children }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <h3>
        {role} — <span style={{ opacity: 0.8 }}>{org}</span>
      </h3>
      <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
        {period}{duration ? ` · ${duration}` : ''}
      </p>
      <ul>{children}</ul>
    </div>
  );
}

function ResearchItem({ title, advisor, period, children }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <h3>{title}</h3>
      <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
        Advisor / Lab: {advisor} · {period}
      </p>
      <ul>{children}</ul>
    </div>
  );
}