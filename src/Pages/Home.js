import "./home.css"
import aws from "../List_Images/aws-logo-blog-header.png"

export default function Home() {
  return (
    <div class="page-parent-div">
      {/*<h1 class="page-title">Resume</h1>*/}
      <section class="resume-section">
        <h2 >Profile</h2>
        <p >A highly motivated, self-driven software engineer with three years experience developing Java Spring Boot applications in the credit industry. Specialized in backend development of highly avaliable and secure microservices which process millions of unique events every day, deployed on AWS, RedHat OpenShift or distributed Unix Systems.</p>
      </section>

      <section class="resume-section">
        <h2>Work Experience</h2>
        <div class="work-start-end">
          <h3 class="work-item-title">Java Developer</h3>
          <h3 class="work-item-start-end">March '21 - Present</h3>
          <h3 class="work-item-employer">TCS Employee; Experian Contract</h3>
        </div>
        <div class="subsection">
          <h3>Responsibilities</h3>
          <p >Drive progress in a company-wide modernization and migration project leveraging new technologies, language features, and frameworks.</p>
          <ul class="subsection-list">
            <li>Enhance and maintain current applications created by my predecessors to meet new business goals, fix implementation errors, and mitigate vulnerabilites</li>
            <li>Design, develop, and maintain new applications, including database tables, for AWS cloud deployment</li>
            <li>Work directly with Experian clients and their technical teams for API integration, testing, and go-live</li>
          </ul>
        </div>
        <div class="special-subsection">
          <h3>Technologies</h3>
          <ul>
            <li><img src={aws}/>AWS</li>
            <li><img src={aws}/>RedHat OpenShift</li>
            <li><img src={aws}/>Java</li>
            <li><img src={aws}/>Spring Boot</li>
          </ul>
          <ul>
            <li><img src={aws}/>Kafka</li>
            <li><img src={aws}/>RabbitMQ</li>
            <li><img src={aws}/>MySql</li>
            <li><img src={aws}/>OracleDB</li>
          </ul>
          <ul>
            <li><img src={aws}/>Docker</li>
            <li><img src={aws}/>Jenkins</li>
            <li><img src={aws}/>Veracode</li>
            <li><img src={aws}/>Unix</li>
          </ul>
          <ul>
            <li><img src={aws}/>Putty</li>
            <li><img src={aws}/>WinSCP</li>
            <li><img src={aws}/>Splunk</li>
          </ul>
        </div>
        <div class="subsection">
          <h3 >Achievements</h3>
          <ul >
            <li>My Hackathon idea, inspired by customer conversions, lead to implementation, completed by me, which increased yearly revenue by ~$800,000 (16%)</li>
            <li>Designed and developed 13 new microservices to completely replace legacy systems</li>
            <li>Performance improvements of two legacy applications, resulting in 50% reduction in latency</li>
            <li>Created and shared new testing techniques and technologies across development teams</li>
            <li>Onboarded 25 new clients</li>
            <li>Enhanced, maintained, and mitigated vulnerabilites of 22 legacy applications</li>
          </ul>
        </div>
      <div class="work-start-end">
        <h3 class="work-item-title">US Marine</h3>
        <h3 class="work-item-start-end">July '12 - Sep '15</h3>
        <h3 class="work-item-employer">United States Marine Corps</h3>
      </div>
      </section>


      <section class="resume-section">
        <h2>Eduction</h2>
        <div class="work-start-end">
          <h3 class="work-item-title">Master of Science: Computer Science</h3>
          <h3 class="work-item-start-end">Aug '22 - Present</h3>
          <h3 class="work-item-employer">California State University, Long Beach</h3>
        </div>
        <div class="work-start-end">
          <h3 class="work-item-title">Bachelor of Science: Computer Science</h3>
          <h3 class="work-item-start-end">May '18 - May '20</h3>
          <h3 class="work-item-employer">California State University, Long Beach</h3>
        </div>
        <div class="work-start-end">
          <h3 class="work-item-title">Study for Transfer</h3>
          <h3 class="work-item-start-end">Aug '15 - May '18</h3>
          <h3 class="work-item-employer">Irvine Valley College</h3>
        </div>
      </section>

      </div>
  )
}