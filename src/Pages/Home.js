import "./home.css"
import aws from "../List_Images/aws-logo-blog-header.png"

export default function Home() {
  return (
    <div class="page-parent-div">
      <h1 class="page-title">Resume</h1>
      <section class="resume-section">
        <h2 class="section-title">Profile</h2>
        <p class="section-main-text">A highly motivated, self-driven software engineer with three years experience developing Java Spring Boot applications in the credit industry. Specialized in backend development of highly avaliable and secure microservices which process millions of unique events every day, deployed on AWS, RedHat OpenShift or distributed Unix Systems.</p>
      </section>

      <section class="resume-section">
        <h2 class="section-title">Work Experience</h2>
        <div class="section-work-item">
          <h3 class="work-item-title">Java Developer</h3>
          <h3 class="work-item-start-end">March '21 - Present</h3>
          <h3 class="work-item-employer">TCS Employee; Experian Contract</h3>
        </div>
        <div class="subsection">
          <h3 class="subsection-title">Responsibilities</h3>
          <p class="subsection-summary">Drive progress in a company-wide modernization and migration project leveraging new technologies, language features, and frameworks.</p>
          <ul class="subsection-list">
            <li class="subsection-list-item">Enhance and maintain current applications created by my predecessors to meet new business goals, fix implementation errors, and mitigate vulnerabilites</li>
            <li class="subsection-list-item">Design, develop, and maintain new applications, including database tables, for AWS cloud deployment</li>
            <li class="subsection-list-item">Work directly with Experian clients and their technical teams for API integration, testing, and go-live</li>
          </ul>
        </div>
        <div class="subsection">
          <h3 class="subsection-title">Technologies</h3>
          <ul class="subsection-list-special">
            <li class="subsection-list-item"><img src={aws}/>AWS</li>
            <li class="subsection-list-item">Java</li>
            <li class="subsection-list-item">Spring Boot</li>
            <li class="subsection-list-item">Kafka</li>
            <li class="subsection-list-item">MySql</li>
            <li class="subsection-list-item">Docker</li>
            <li class="subsection-list-item">Jenkins</li>
          </ul>
          <ul class="subsection-list-special">
            <li class="subsection-list-item">RedHat OpenShift</li>
            <li class="subsection-list-item">Unix</li>
            <li class="subsection-list-item">Splunk</li>
            <li class="subsection-list-item">Putty</li>
            <li class="subsection-list-item">Veracode</li>
            <li class="subsection-list-item">RabbitMQ</li>
            <li class="subsection-list-item">OracleDB</li>
          </ul>
        </div>
        <div class="subsection">
          <h3 class="subsection-title">Achievements</h3>
          <ul class="subsection-list">
          <li class="subsection-list-item">My Hackathon idea, inspired by customer conversions, lead to implementation, completed by me, which increased yearly revenue by ~$800,000 (16%)</li>
          <li class="subsection-list-item">Designed and developed 13 new microservices to completely replace legacy systems</li>
          <li class="subsection-list-item">Performance improvements of two legacy applications, resulting in 50% reduction in latency</li>
          <li class="subsection-list-item">Created and shared new testing techniques and technologies across development teams</li>
          <li class="subsection-list-item">Onboarded 25 new clients</li>
          <li class="subsection-list-item">Enhanced, maintained, and mitigated vulnerabilites of 22 legacy applications</li>
          </ul>
        </div>
      </section>
      </div>
  )
}