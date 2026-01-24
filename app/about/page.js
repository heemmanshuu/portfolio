import Base from '../../layouts/Base';
import AboutClient from './AboutClient';

export const metadata = {
  title: 'About Me',
  description:
    "Heemmanshuu Dasari is a backend software engineer and computer science researcher with a focus on distributed systems and reliability. He is currently pursuing an MS in Computer Science at the University of California, Irvine. Previously, he worked at Oracle building secure, multi-tenant notification services, and at Nutanix on fault-tolerant cloud provisioning workflows across public and on-prem infrastructure. With a strong foundation from IIT Bombay, Heemmanshuu has worked across large-scale systems, data-intensive platforms, and emerging AI/LLM infrastructure, including distributed matchmaking and inference systems. His work is driven by an interest in building robust systems that scale in the real world, combining practical engineering with research-oriented thinking.",
  openGraph: {
    title: 'About // G Heemmanshuu Dasari',
    description:
      "Heemmanshuu is an Indian backend engineer. He lives in Irvine, CA, where he pursuing an MS in Computer Science.",
    url: 'https://ghdasari.vercel.app/about',
    images: ['/static/images/about-bw.jpg']
  }
};

export default function About() {
  const description =
    "Heemmanshuu Dasari is a backend software engineer and computer science researcher with a focus on distributed systems and reliability. He is currently pursuing an MS in Computer Science at the University of California, Irvine. Previously, he worked at Oracle building secure, multi-tenant notification services, and at Nutanix on fault-tolerant cloud provisioning workflows across public and on-prem infrastructure. With a strong foundation from IIT Bombay, Heemmanshuu has worked across large-scale systems, data-intensive platforms, and emerging AI/LLM infrastructure, including distributed matchmaking and inference systems. His work is driven by an interest in building robust systems that scale in the real world, combining practical engineering with research-oriented thinking.";

  return (
    <Base
      title="About // G Heemmanshuu Dasari"
      tagline="About Me"
      primaryColor="pink"
      secondaryColor="purple"
    >
      <AboutClient description={description} />
    </Base>
  );
}
