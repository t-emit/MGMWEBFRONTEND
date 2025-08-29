import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation

const ServiceRulesPage = () => {
  const location = useLocation(); // Get current URL location
  
  // Refs for each chapter content section
  const chapter1Ref = useRef(null);
  const chapter2Ref = useRef(null);
  const chapter3Ref = useRef(null);

  // Data for the 'Types of Leave' table
  const leaveTypes = [
    { srNo: 1, type: 'Casual Leave', abbreviation: 'CL' },
    { srNo: 2, type: 'Earned Leave', abbreviation: 'EL' },
    { srNo: 3, type: 'Medical Leave', abbreviation: 'ML' },
    { srNo: 4, type: 'Maternity Leave', abbreviation: '--' },
    { srNo: 5, type: 'Extraordinary Leave', abbreviation: 'EOL' },
    { srNo: 6, type: 'On Duty Leave', abbreviation: 'OD' },
    { srNo: 7, type: 'Special Leave /Deputation', abbreviation: 'SpL' },
    { srNo: 8, type: 'Study Leave', abbreviation: 'SL' },
    { srNo: 9, type: 'Compensatory Leave', abbreviation: 'COF' },
    { srNo: 10, type: 'Sabbatical Leave', abbreviation: 'SbL' },
  ];

  // Chapter data for sidebar navigation, mapping to refs
  const chapters = [
    { title: "Chapter I: Introduction & Definitions", id: "chapter1", ref: chapter1Ref },
    { title: "Chapter II: Appointments", id: "chapter2", ref: chapter2Ref },
    { title: "Chapter III: Service Rules", id: "chapter3", ref: chapter3Ref },
  ];

  // Function to scroll to a specific chapter
  const scrollToChapter = (chapterId) => {
    // Using a setTimeout to ensure the DOM has updated and element is rendered before scrolling
    setTimeout(() => {
        const element = document.getElementById(chapterId);
        if (element) {
            // Optional: Adjust scroll position if you have a fixed header
            const headerOffset = 120; // Approximate height of your fixed header
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - headerOffset,
                behavior: 'smooth'
            });
            // Update URL hash without causing a full page reload or component remount
            window.history.pushState(null, '', `#${chapterId}`);
        }
    }, 100);
  };

  // Effect to scroll to a chapter if a hash is present in the URL on load or hash change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // Remove the '#'
      scrollToChapter(id);
    }
  }, [location.hash]); // Rerun effect when hash changes

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-xl p-8 text-white mb-8 shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Service Rules</h1>
        <p className="text-xl opacity-90">
          Details pertaining to the service rules and regulations for staff and faculty.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-32 z-10"> {/* Added z-10 to ensure it's above content */}
            <h3 className="text-xl font-bold text-indigo-800 mb-4">Table of Contents</h3>
            <ul className="space-y-2">
              {chapters.map((chapter, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToChapter(chapter.id)}
                    className={`w-full text-left py-2 px-4 rounded-lg transition-colors ${
                      location.hash === `#${chapter.id}` // Active based on current URL hash
                        ? 'bg-indigo-100 text-indigo-800 font-semibold'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {chapter.title}
                  </button>
                </li>
              ))}
            </ul>
            
            {/* Quick Links (These will still use native anchor links) */}
            <div className="mt-8 pt-4 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToChapter('leave-types')} className="text-blue-600 hover:underline text-left w-full">Leave Types</button></li>
                <li><button onClick={() => scrollToChapter('retirement')} className="text-blue-600 hover:underline text-left w-full">Retirement Policies</button></li>
                <li><button onClick={() => scrollToChapter('welfare')} className="text-blue-600 hover:underline text-left w-full">Welfare Schemes</button></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:w-3/4">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10">
            <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-3">
              Institutional Service Rules and Regulations
            </h2>

            {/* Content Section - Chapter-I */}
            <div ref={chapter1Ref} id="chapter1" className="prose max-w-none text-gray-700 leading-relaxed scroll-mt-28"> {/* scroll-mt-28 for fixed header */}
              <div className="bg-indigo-50 p-4 rounded-lg mb-6 border-l-4 border-indigo-600">
                <h3 className="text-2xl font-bold text-indigo-800">Chapter-I</h3>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">1. Vision of the Institution</h4>
                <p className="mb-6 bg-blue-50 p-4 rounded-lg">
                  To be one of the leading Institutions for Engineering education developing proficient Engineers with global acceptance in the service of mankind.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">2. Mission of the Institution</h4>
                <ul className="list-disc pl-5 space-y-3 mb-6 bg-blue-50 p-4 rounded-lg">
                  <li>Providing quality Engineering education to cater the needs of industry and society with multidisciplinary approach on sustainable basis.</li>
                  <li>Developing globally competent Engineers having ability to solve real-life problems addressing environmental issues through technological advancements.</li>
                  <li>Inculcating professionalism, teamwork, research, innovation and entrepreneurship, maintaining the spirit of continuous learning.</li>
                  <li>Fostering the collaboration with industry, academia, research organizations, experts and alumni.</li>
                  <li>Imparting employability skills, nurturing leadership qualities, with ethical and social values among students.<a name="_GoBack" aria-hidden="true"></a></li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">3. Introduction</h4>
                <p className="mb-6 bg-gray-50 p-4 rounded-lg">
                  The Service Rules document is prepared to make aware all the staff members working at MGM&rsquo;s College of Engineering, Nanded about the rules and regulations that govern their work/duties in the Institute. The following rules shall apply to all regular employees i.e. teaching and non-teaching, provided that nothing in these rules and regulations shall apply to persons employed temporarily or on daily wages. The Rules shall come into force with effect from 01‐07‐2017.<br/><br/>
                  The Governing Council of MGM&rsquo;s College of Engineering Nanded is the final authority relating to the appointments, service conditions, fixing or adoption of pay scales of all employees of the College. The Governing Council of the College may add, amend, alter or change these service conditions whenever it deemed it necessary.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">4. Definitions</h4>
                <ul className="list-disc pl-5 space-y-3 mb-6 bg-gray-50 p-4 rounded-lg">
                  <li>&ldquo;Governing Council&rdquo; means the Governing Council of MGM&rsquo;s College of Engineering, Nanded constituted as per norms of the Statutory Authority.</li>
                  <li>&ldquo;Bye-Laws&rdquo; mean the Bye-Laws of the MGM Trust.</li>
                  <li>&ldquo;Institute&rdquo; means the MGM&rsquo;s College of Engineering, Nanded.</li>
                  <li>&ldquo;Trust&rdquo; means the trust by the name of MGM Trust (Mahatma Gandhi Mission Trust).</li>
                  <li>&ldquo;Chairman&rdquo; means the Chairman of the Trust.</li>
                  <li>&ldquo;Secretary&rdquo; means the Secretary of the Governing Council.</li>
                  <li>&ldquo;Director&rdquo; means the Director of the Institute who is Secretary for the Governing Council.</li>
                  <li>&ldquo;Rules&rdquo; means the rules of MGM&rsquo;s College of Engineering, Nanded.</li>
                  <li>&ldquo;Employee&rdquo; means a person employed by the Institute to discharge the duties for teaching and non-teaching purposes on salary/remuneration/honorarium basis.</li>
                  <li>&ldquo;Regular Employee&rdquo; means a qualified person employed in a regular post after completion of probation period specified.</li>
                  <li>&ldquo;Probationer&rdquo; means an employee who is appointed against a regular post and kept on probation for a prescribed period of time pending confirmation for regular post.</li>
                  <li>&ldquo;Salary&rdquo; means basic pay, and other allowances, if any, whatever applicable or consolidated pay without any allowances payable to an employee.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">5. Power to interpret, implement and to amend the rules</h4>
                <p className="mb-6 bg-gray-50 p-4 rounded-lg">
                  The power to interpret, implement and to amend the rules and regulations vests with the Governing Council who is empowered to issue such administrative instructions or orders as may be necessary to give effect and to carry out the provisions of these rules and regulations. The Governing Council shall have absolute right, liberty and powers to withdraw, modify, amend, alter, add to, repeal or to supercede at its sole discretion for any or all the rules contained herein or any rules and regulations framed and enforced by it from time to time, provided that the new rules or regulations or alterations or amendments so made shall not be detrimental or adversely affect the interest of the existing employees who are in regular service on the day new rules or regulations or alterations come into force.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">6. Governing Councils powers to delegate</h4>
                <p className="mb-6 bg-gray-50 p-4 rounded-lg">
                  The Governing Council may delegate powers to the Secretary or to any officer or officers of the Institution under their control, any or all the functions wholly or partly, permanently or temporarily and such officers or officer shall be the Governing Council for the purpose of interpretation of these rules to the extent and for the duration of the period as may be authorized by the Governing Council.
                </p>
              </div>
            </div>

            <hr className="my-8 border-t-2 border-indigo-200"/>

            {/* Content Section - Chapter-II */}
            <div ref={chapter2Ref} id="chapter2" className="prose max-w-none text-gray-700 leading-relaxed scroll-mt-28"> {/* scroll-mt-28 for fixed header */}
              <div className="bg-indigo-50 p-4 rounded-lg mb-6 border-l-4 border-indigo-600">
                <h3 className="text-2xl font-bold text-indigo-800">Chapter - II: APPOINTMENTS</h3>
              </div>

              <div className="mb-8">
                <ul className="list-disc pl-5 space-y-3 mb-6">
                  <li>The employees of the Institute will be classified as follows:
                    <ul className="list-circle pl-6 mt-2 space-y-2">
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">i.</span>
                        <span>Teaching staff (faculty)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">ii.</span>
                        <span>Administrative staff</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">iii.</span>
                        <span>Technical Supporting staff includes</span>
                      </li>
                    </ul>
                  </li>
                  <li>The Governing Council as per norms of statutory bodies shall fix the number of posts in each DEPARTMENT in all categories from time to time in accordance with SRA, and also prescribe qualifications, mode of recruitment and the scales of pay etc., to each category of posts which may be reviewed and revised by the Governing Council from time to time depending upon the exigency. The pay scales of the Teaching Staff (faculty) are covered under U.G.C/A.I.C.T.E. scales. Hence, their pay will be fixed in the appropriate grades and scales depending upon qualifications, experience, exposure and merit etc., as applicable and as amended from time to time except the staff recruited temporarily on a consolidated pay.</li>
                  <li>Notwithstanding anything contained in these rules and regulations, the Governing Council may employ persons on a temporary basis to different posts in the organization under their control on a consolidated pay or on daily wages or contract basis whenever and wherever the necessity and circumstances so warrant.</li>
                  <li>All posts of the Institute shall normally be filled by advertisements but due to contingency of service the Trust shall have the power to decide on the recommendation of the Director that a particular post may be filled by promotion from amongst the members of the staff of the Institute.</li>
                  <li>Contract Appointments: In special circumstances, the Governing Council of the Institution may permit the appointment of faculty/staff on contract basis.</li>
                  <li>Service of the employee is transferable to anywhere in India in other engineering colleges or polytechnic run by the Mahatma Gandhi Mission Trust whenever required.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">CERTIFICATES</h4>
                <p className="mb-4">
                  Every employee shall be required to produce the following certificates on being appointed in the Institute on regular/temporary/adhoc/contract basis:-
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6 bg-blue-50 p-4 rounded-lg">
                  <li>Original Degree/Diploma certificates of the qualifications possessed by them along with attested Photostat copies of the same.</li>
                  <li>Experience and other certificates as applicable.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">PROMOTION POLICY</h4>
                <p className="mb-6 bg-gray-50 p-4 rounded-lg">
                  Career Advancement Scheme is applicable in the College as per AICTE/UGC/Affiliating University guidelines. Promotion to higher level of service shall be made subject to the availability of the posts, eligibility of the staff; seniority and performance will be the deciding criterion. The Promotions under Career Advancement Scheme of Teaching Staff will follow the guidelines subject to the condition that the candidate possesses the prescribed minimum qualification and experience.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">AGE</h4>
                <p className="mb-6 bg-gray-50 p-4 rounded-lg">
                  The age of a person at the time of his/her appointment in the Institute shall be at the discretion of the Governing Council. Minimum age of the employee should not be less than 18 years.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">COMMENCEMENT OF SERVICE</h4>
                <p className="mb-6 bg-gray-50 p-4 rounded-lg">
                  Except as otherwise provided by or under these regulations, service of an employee shall be deemed to commence from the working day on which an employee reports for duty in an appointment covered by these regulations at the place and time intimated to him by the Governing Council provided that if he or she reports before forenoon, otherwise his/her service shall commence from the following day.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">PROBATION</h4>
                <ul className="list-disc pl-5 space-y-3 mb-6 bg-blue-50 p-4 rounded-lg">
                  <li>Employees who are appointed to the posts in the organizations under the control of Governing Council directly or on regular basis shall be required to be on probation for a period of not less than one year and in case of employees on promotion/transfer appointed to higher posts shall be for a period of not less than six months period on duty.</li>
                  <li>The probation period may be extended by the Governing Council if his/her service during the period prescribed in the appointment order is found to be not satisfactory.</li>
                  <li>If the extension of probation is not declared within three months from the date of completion of the prescribed period, the probation is deemed to have been completed satisfactorily and he/or she becomes a regular employee.</li>
                  <li>The services of an employee on probation may be terminable by either party giving one month notice to the other party or by paying one months' salary in lieu thereof.</li>
                  <li>During probation period, the employee will not be entitled to any leave except CL, allowances or perks applicable as per rules to other categories of employees of the Institute. Candidates already in service for more than 2 years are exempted &amp; are entitled for regular leave / vacation benefits.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">TERMINATION OF SERVICE</h4>
                <ul className="list-disc pl-5 space-y-3 mb-6 bg-blue-50 p-4 rounded-lg">
                  <li>If an employee at any time after completion of the probation intends to resign, he or she shall give one months' notice in writing or pay one months' salary in lieu thereof. Similarly, the Governing Council shall be competent at its discretion to terminate the service of any employee by giving one months' notice or by paying one months' salary in lieu thereof.</li>
                  <li>The Governing Council shall also be competent to terminate the services of an employee in case of abolition of post or posts, due to closure of an Institution/department or reduction in the number of cadre strength or sections of a class or reduction in the sanctioned intake.</li>
                  <li>The Governing Council shall also be competent to terminate the services of an employee who is incapacitated to discharge his official duties or for misconduct in discharging his/her official duties.</li>
                </ul>
              </div>

              <div id="retirement" className="mb-8 scroll-mt-28"> {/* Added scroll-mt-28 */}
                <h4 className="text-xl font-semibold text-blue-800 mb-3">RETIREMENT</h4>
                <ul className="list-disc pl-5 space-y-3 mb-6 bg-blue-50 p-4 rounded-lg">
                  <li>The age of superannuation of a Teaching Staff and Class IV employees is 60 years and Non-teaching staff is 58 years, the retirement benefits such as gratuity, etc. shall be paid at the time of retirement.</li>
                  <li>The Governing Council in the interest of the Institute may extend the period of service of the employee concerned by such period as determined depending on the mental and physical condition of such an employee.</li>
                  <li>Age of superannuation in the categories of Librarian and Director of Physical Education will be 60 years only.</li>
                  <li>Any appointment after 58 years in the case of non-teaching staff and 60 years for Teaching Staff shall be on contract.</li>
                  <li>Teaching Staff can be reappointed up to the age of 70 years on contract depending on the need. Consolidated salary to be fixed based on the qualification and requirement of the department for those retired at the age of 60 years.</li>
                  <li>Guidelines for employees seeking reemployment after attaining the age of superannuation
                    <ul className="list-circle pl-6 mt-2 space-y-2">
                      <li>If an employee, after attaining the age of superannuation, desires to serve the Institute, he may apply, in writing, to the Governing Council to continue him in the service.</li>
                      <li>After assessing the mental and physical condition of such an employee and the need to continue him in service and on receipt of the recommendation of the Director, the Governing Council can continue him in service on contract basis duly indicating the:
                        <ul className="list-square pl-6 mt-2 space-y-2">
                          <li>tenure of appointment;</li>
                          <li>consolidated salary to be paid per month;</li>
                          <li>annual increment payable in case the appointment is for more than a year; and</li>
                          <li>eligibility of the employee for benefits like leave other than casual leave.</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div id="welfare" className="mb-8 scroll-mt-28"> {/* Added scroll-mt-28 */}
                <h4 className="text-xl font-semibold text-blue-800 mb-3">FACULTY WELFARE SCHEMES</h4>
                <ul className="list-disc pl-5 space-y-3 mb-6 bg-blue-50 p-4 rounded-lg">
                  <li>
                    <span className="font-semibold">a) Employee Provident Fund Scheme</span><br/>
                    All the faculty members (Teaching &amp; Non-Teaching) other than those who joined in this Institute after completing the age of 58 years are enrolled under the EPF scheme from the date of joining in service as per Provident Fund Act.
                  </li>
                  <li>
                    <span className="font-semibold">b) Gratuity</span><br/>
                    All the faculty members (Teaching &amp; Non-Teaching) who have put in a minimum of 5 years continuous service (Excluding leave on loss of pay) in this Institute shall be paid service gratuity as per Indian Gratuity Rules.
                  </li>
                  <li>
                    <span className="font-semibold">c) Insurance Scheme</span><br/>
                    All staff members (Teaching &amp; Non-Teaching) are covered by a group insurance policy.
                  </li>
                  <li>
                    <span className="font-semibold">d) Interest Free Advance</span><br/>
                    All staff Members (Teaching and Non-Teaching) who have completed two years of service and those who apply for advances will be eligible for interest free advance as per the need of faculty and it is recoverable in equal installments from the salary of the staff member.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">RESEARCH &amp; CONSULTANCY</h4>
                <p className="mb-6 bg-gray-50 p-4 rounded-lg">
                  The Institute encourages its teachers to take consultancy and in-house R&amp;D assignments. The teacher shall undertake such assignments. The teacher shall take up the assignment by obtaining the approval of the Director/Chairman in writing. The teacher shall avail the administrative and infrastructure facilities available in the college for carrying out his/her assignment. The teacher shall also associate other members of the faculty in working on the assignments. The teacher shall levy such professional charges on the benefiting agency; however, the charges shall be shared with the college as per norms.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">FINANCIAL SUPPORT FOR CONFERENCES, SEMINAR, WORKSHOP, FDP</h4>
                <p className="mb-6 bg-gray-50 p-4 rounded-lg">
                  As a part of the continual quality improvement policy of the college, financial support will be given to the staff members publishing papers in HCI/Scopus indexed journals. Prior permission shall be obtained from competent authority for sending papers. In the case of attending conferences, Seminar, Workshop, FDP, registration fees will be provided to staff member with prior permission.
                </p>
              </div>
            </div>

            <hr className="my-8 border-t-2 border-indigo-200"/>

            {/* Content Section - Chapter-III */}
            <div ref={chapter3Ref} id="chapter3" className="prose max-w-none text-gray-700 leading-relaxed scroll-mt-28"> {/* Added scroll-mt-28 */}
              <div className="bg-indigo-50 p-4 rounded-lg mb-6 border-l-4 border-indigo-600">
                <h3 className="text-2xl font-bold text-indigo-800">Chapter - III: RECORD OF SERVICE AND SENIORITY</h3>
              </div>

              <div className="mb-8">
                <ul className="list-disc pl-5 space-y-3 mb-6">
                  <li><span className="font-semibold">Record of Service:</span> A record of service shall be maintained in respect of each employee in a service register or in such form as may be prescribed by the Governing Council from time to time.</li>
                  <li><span className="font-semibold">Seniority:</span> The seniority of the employee in the service shall be determined with reference to his/her date of regular appointment in the post held by him/her in the particular category.</li>
                  <li><span className="font-semibold">Promotion:</span> All appointments and promotions shall be made at the discretion of the Governing Council and notwithstanding his/her seniority in a grade no employee shall have a right to be appointed or promoted to any particular post or grade.</li>
                  <li><span className="font-semibold">Reversion:</span> An employee transferred from one post to another or promoted from the lower post to the higher post shall be liable for reversion at any time without notice and without assigning any reason therefore by the Governing Council.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">CONDUCT AND DISCIPLINE RULES</h4>
                <ul className="list-disc pl-5 space-y-3 mb-6 bg-blue-50 p-4 rounded-lg">
                  <li><span className="font-semibold">Scope of an employee's service:</span> Unless in any case if it is otherwise distinctly provided, the whole time of an employee shall be at the disposal of the Governing Council and he or she shall serve in the Institution under its control.</li>
                  <li><span className="font-semibold">Liability to abide by the rules and regulations:</span> Every employee shall conform to and abide by such rules and shall observe, comply with and obey all orders and directions issued by the Governing Council from time to time with utmost endeavour to promote the interests of the institution where at he/she is working by showing courtesy and attention in all transactions.</li>
                  <li><span className="font-semibold">Application for other employment:</span>
                    <ul className="list-circle pl-6 mt-2 space-y-2">
                      <li>No employee shall apply for other employment or signify his willingness to accept such employment or office whether stipendiary or honorary or otherwise without the prior written permission of the Governing Council. However, the Governing Council may, at its discretion, permit an employee to apply for an outside post not more than once in a year.</li>
                    </ul>
                  </li>
                  <li>No employee whether on leave or in active service of the Institution shall undertake part-time job which is likely to embarrass or influence him/her in the discharge of his/her official duties for any consideration whether cash or kind. However, an employee with the written permission of the Governing Council may undertake honorary work of a social or charitable nature or occasional work of a literary, artistic or scientific character subject to the condition that such work does not interfere with his official duties.</li>
                  <li><span className="font-semibold">Obligation to maintain secrecy:</span> Every employee shall maintain secrecy in regard to the affairs of the institution and its constituents and shall not divulge directly or indirectly any information of confidential nature either to a member of the public or the Institution staff unless compelled to do so by judicial or other legal authority or unless instructed to do so by the Governing Council.</li>
                  <li><span className="font-semibold">Absent from duty without permission:</span> An employee shall not remain absent from his/her duties without first obtaining the Permission of the competent authority. In case of unavoidable circumstances, message or a letter should be sent on the next working day giving the reasons of his absence for the previous days. If the employee absents himself continuously for a period of 10 working days or more without any leave letter or communication, the employee shall be deemed to have been deserted the post held by him/her from the date on which he/she abstained from duty.</li>
                  <li>The employee shall devote his/her whole time &amp; attention to promote the interests of the students and the Institute. Employee should totally use his/her time &amp; energy for this Institute.</li>
                  <li>Employees are not allowed to
                    <ul className="list-circle pl-6 mt-2 space-y-2">
                      <li>a) Engage tuition classes</li>
                      <li>b) Accept any other assignment full time/ part-time</li>
                      <li>c) Hold any office of profit or business</li>
                      <li>d) Involvement in any activity inside or outside the campus which will be deterrent to the teaching profession &amp; image of the Institution.</li>
                    </ul>
                  </li>
                  <li>While in service employees are not allowed to contest any election to Gram Panchayat, Panchayat Samiti, Zilla Parishad, Municipal Council, Corporation, State Legislature or Parliament or involve in any political activities.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">LEAVE RULES</h4>
                <p className="mb-4">
                  These rules shall be called &quot;MGM&rsquo;s College of Engineering Leave Rules&quot;. The Institute follows all the guidelines/rules framed by AICTE/Government of Maharastra /Affiliating University.
                </p>
                <ul className="list-disc pl-5 space-y-3 mb-6 bg-blue-50 p-4 rounded-lg">
                  <li>Leave cannot be claimed as a matter of right. The sanctioning authority has full discretion to refuse or revoke leave of any description when the exigencies of service so demand.</li>
                  <li>The sanctioning authority may recall an employee to duty before the expiry of his/her leave.</li>
                  <li>Unauthorized absence from duty may be treated as misbehavior involving disciplinary action. An employee on leave shall not take up any service or accept any employment without the prior sanction of the appointing authority.</li>
                  <li>Every application for leave on medical grounds shall be accompanied by a medical certificate given by a Registered Medical Practitioner/Asst. Civil Surgeon.</li>
                  <li>The Director shall be the competent authority to grant leave to all employees.</li>
                  <li>Leave without pay will be treated as break in service.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">3.1 Types of Leave</h4>
                {/* Responsive Table for Leave Types */}
                <div id="leave-types" className="overflow-x-auto relative shadow-md rounded-lg mt-4 mb-6 scroll-mt-28">
                  <table className="w-full text-sm text-left text-gray-700">
                    <thead className="text-xs text-white uppercase bg-indigo-700">
                      <tr>
                        <th scope="col" className="py-3 px-4 md:px-6 rounded-tl-lg">Sr.No</th>
                        <th scope="col" className="py-3 px-4 md:px-6">Type of Leave</th>
                        <th scope="col" className="py-3 px-4 md:px-6 rounded-tr-lg text-center">Abbreviation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaveTypes.map((leave, index) => (
                        <tr key={leave.srNo} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-gray-100`}>
                          <td className="py-3 px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap">
                            {leave.srNo}
                          </td>
                          <td className="py-3 px-4 md:px-6">
                            {leave.type}
                          </td>
                          <td className="py-3 px-4 md:px-6 text-center">
                            {leave.abbreviation}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">3.2 Vacation</h4>
                <p className="mb-6 bg-gray-50 p-4 rounded-lg">
                  The Teaching staff is entitled to avail vacation of 60 days during the period of 12 months commencing from the beginning of the academic year. The Teacher shall be expected to work in the college during the vacation relevant to his/her duties as a Teacher and as may be assigned to him/her by the Competent Authority. However he is expected to perform the duties if any assigned by the Competent Authority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceRulesPage;