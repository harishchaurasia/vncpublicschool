import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-lg font-display font-bold text-white bg-[#64B6AC] px-5 py-3 rounded-t-xl">
      {title}
    </h2>
    <div className="border border-gray-200 rounded-b-xl overflow-hidden">
      <table className="w-full text-sm font-inter">
        <tbody>{children}</tbody>
      </table>
    </div>
  </div>
);

const Row = ({ label, value, note }) => (
  <tr className="border-b border-gray-100 last:border-0 even:bg-gray-50">
    <td className="px-5 py-3 font-semibold text-gray-700 w-[45%] align-top">{label}</td>
    <td className="px-5 py-3 text-gray-600 align-top">
      {value || (
        <span className="text-amber-600 italic">
          {note || 'To be updated by school administration'}
        </span>
      )}
    </td>
  </tr>
);

const DocRow = ({ label, link }) => (
  <tr className="border-b border-gray-100 last:border-0 even:bg-gray-50">
    <td className="px-5 py-3 font-semibold text-gray-700 w-[45%] align-top">{label}</td>
    <td className="px-5 py-3 align-top">
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer"
           className="text-[#64B6AC] underline hover:text-[#3d8f87] font-medium">
          View Document
        </a>
      ) : (
        <span className="text-amber-600 italic">Upload pending</span>
      )}
    </td>
  </tr>
);

export default function Disclosure() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Mandatory Public Disclosure | VNC Public School</title>
        <link rel="icon" href="/logo.png" />
        <meta name="description" content="CBSE Mandatory Public Disclosure for VNC Public School, Gorakhpur as per Appendix IX of CBSE Affiliation Bye-Laws." />
      </Head>

      <Header />
      <Nav />

      {/* Hero */}
      <div className="bg-gray-900 py-10 px-4 text-center">
        <span className="inline-block bg-[#64B6AC] text-white text-xs font-inter font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
          CBSE Compliance
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-2">
          Mandatory Public Disclosure
        </h1>
        <p className="text-gray-400 font-inter text-sm max-w-xl mx-auto">
          As required under CBSE Affiliation Bye-Laws — Appendix IX (Circular No. 09/2021).
          Information updated annually.
        </p>
      </div>

      <main className="flex-1 bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">

          {/* A — General Information */}
          <Section title="A. General Information">
            <Row label="Name of School" value="VNC Public School" />
            <Row label="Affiliation Number" note="Affiliation number to be entered" />
            <Row label="School Code" note="School code to be entered" />
            <Row label="Complete Address" value="Gajpur Bazaar Rd, Gajpur, Gorakhpur, Uttar Pradesh – 273413" />
            <Row label="Principal Name &amp; Qualification" value="Ashish Singh" />
            <Row label="School Email ID" value="vncpublicgajpur@gmail.com" />
            <Row label="Contact Number" value="+91 70548 58403" />
            <Row label="Year of Establishment" note="Year to be entered" />
            <Row label="Name of Trust / Society" value="VNC Public School" />
            <Row label="Name of Manager / Chairman" value="Shatrudhan Chaurasia" />
            <Row label="Status of Affiliation" note="Provisional / Regular / Permanent" />
            <Row label="Affiliation Valid From – To" note="Date range to be entered" />
          </Section>

          {/* B — Documents */}
          <Section title="B. Documents and Information">
            <DocRow label="Copies of Affiliation / Upgradation Letter" />
            <DocRow label="Society / Trust Registration Certificate" />
            <DocRow label="NOC from State / UT Government" />
            <DocRow label="Recognition Certificate under RTE Act 2009" />
            <DocRow label="Valid Building Safety Certificate" />
            <DocRow label="Valid Fire Safety Certificate" />
            <DocRow label="DEO Certificate (for Affiliation / Extension)" />
            <DocRow label="Valid Water, Health &amp; Sanitation Certificates" />
          </Section>

          {/* C — Academic */}
          <Section title="C. Results and Academics">
            <Row label="Fee Structure" note="Current fee structure to be uploaded" />
            <Row label="Annual Academic Calendar" note="To be uploaded each session" />
            <Row label="List of School Management Committee (SMC)" note="SMC member list to be entered" />
            <Row label="List of Parent–Teacher Association (PTA) Members" note="PTA member list to be entered" />
            <Row label="Classes Offered" value="Nursery, LKG, UKG, Class 1 to Class 12" />
            <Row label="Medium of Instruction" value="English / Hindi" />
            <Row label="Board Exam Results – Last 3 Years" note="Year-wise results to be entered" />
            <Row label="Special Education Support" note="Details to be provided" />
          </Section>

          {/* D — Staff */}
          <Section title="D. Staff Details">
            <Row label="Principal" value="Ashish Singh" />
            <Row label="Total Number of Teaching Staff" note="Count to be entered" />
            <Row label="Teacher–Section Ratio" note="Ratio to be calculated and entered" />
            <Row label="Details of Special Educator (if any)" note="Name and qualification to be entered" />
            <Row label="Counsellor / Wellness Teacher" note="Name and qualification to be entered" />
            <Row
              label="Individual Staff Qualifications"
              note="Complete staff list with names, designations, qualifications and experience to be uploaded"
            />
          </Section>

          {/* E — Infrastructure */}
          <Section title="E. School Infrastructure">
            <Row label="Total Campus Area (sq. mtrs.)" note="Area in square metres to be entered" />
            <Row label="Area of Playground (sq. mtrs.)" note="Area in square metres to be entered" />
            <Row label="Number and Size of Classrooms" note="Details to be entered" />
            <Row label="Number and Size of Laboratories" note="Include computer labs" />
            <Row label="Library Facility" note="Available / Not available — details" />
            <Row label="Internet Facility" note="Yes / No" />
            <Row label="Number of Girls' Toilets" note="Count to be entered" />
            <Row label="Number of Boys' Toilets" note="Count to be entered" />
            <Row label="Drinking Water Facility" note="Available / Not available" />
            <Row label="CCTV Surveillance" note="Yes / No — number of cameras" />
            <Row label="Transport Facility" note="Available / Not available" />
            <Row
              label="School Infrastructure Inspection Video"
              note="YouTube link of school inspection video to be added"
            />
          </Section>

          <div className="mt-6 p-5 bg-amber-50 border border-amber-200 rounded-xl text-sm font-inter text-amber-800">
            <strong>Note:</strong> Fields marked as pending are required by CBSE and must be completed by the school administration.
            Please contact the school office at <a href="mailto:vncpublicgajpur@gmail.com" className="underline">vncpublicgajpur@gmail.com</a> for
            queries. This disclosure is updated annually or when information changes.
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
