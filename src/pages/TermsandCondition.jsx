// import React from "react";
// import SimpleFooter from "../components/sections/SimpleFooter";

// const TermsandCondition = () => {
//   return (
//     <div className="bg-white min-h-screen flex flex-col">
//       {/* Main Content */}
//       <main className="flex justify-center px-4 sm:px-6 lg:px-8 py-12 flex-1">
//         <div className="max-w-4xl w-full">
//           <span className="inline-block ml-[408px] text-xs font-normal text-brand-text bg-gray-100 px-3 py-1 rounded-full mb-4">
//             Terms
//           </span>
//           {/* Title */}
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-center mb-2">
//             Terms of Use
//           </h1>
//           <p className="text-center text-brand-text mb-8 text-sm sm:text-base">
//             Last updated on 15 March 2025.
//           </p>

//           {/* Introduction */}
//           <p className="text-brand-text mb-6 text-sm sm:text-base leading-relaxed">
//             This website is operated and managed by Docplix Solutions Private
//             Limited (referred to as "Docplix"). Your access to and use of this
//             website are governed by the following terms of use (referred to as
//             "Terms of Use"). By using this website, you agree to be bound by
//             these Terms of Use. If you do not agree to these terms, please
//             refrain from using this website.
//           </p>

//           {/* Website Usage */}
//           <Section
//             title="Website Usage"
//             content={`All content published on this website, including but not limited to text, photographs, graphics, images, illustrations, trademarks, logos, audio or video clips, and animations, is protected by copyrights, trademarks, or other intellectual property rights owned by Docplix or its partners. You are prohibited from modifying, publishing, transmitting, participating in the transfer or sale of, reproducing, creating derivative works from, distributing, or exploiting any of the materials or content on this website, in whole or in part. The technology and software underlying this website are the property of Docplix. You agree not to disrupt or compromise the security of the website, or any services, systems, accounts, servers, or networks connected to or accessible through the website. You also agree not to interfere with other users' enjoyment of the website, and not to upload, post, or transmit any viruses or other harmful, disruptive, or destructive files through the website. Furthermore, you agree not to use this website to seek, provide, or obtain specific medical advice, diagnoses, or treatments for any individual's particular condition or situation.`}
//           />

//           {/* Disclaimer of Liability */}
//           <Section
//             title="Disclaimer of Liability"
//             content={`Docplix disclaims any responsibility for the deletion, failure to store, mis-delivery, or untimely delivery of any information or materials. We are not liable for any service outages caused by server maintenance, technology failures, service provider issues (including telecommunications, hosting, and power providers), computer viruses, natural disasters, acts of nature, war, civil disturbances, or any other events beyond our reasonable control.\n\nWE DO NOT GUARANTEE THAT THIS WEBSITE WILL BE UNINTERRUPTED OR ERROR-FREE. FURTHERMORE, WE DO NOT MAKE ANY WARRANTIES REGARDING THE CONTENT ON THIS WEBSITE. THIS WEBSITE AND ITS CONTENT ARE PROVIDED ON AN "AS IS, AS AVAILABLE" BASIS. ANY MATERIALS YOU DOWNLOAD OR OBTAIN THROUGH THIS WEBSITE ARE AT YOUR OWN DISCRETION AND RISK, AND YOU ARE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT MAY RESULT FROM DOWNLOADING SUCH MATERIALS. WE DO NOT WARRANT THAT (i) THIS WEBSITE WILL MEET YOUR REQUIREMENTS, (ii) THE WEBSITE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (iii) THE RESULTS OBTAINED FROM USING THIS WEBSITE WILL BE ACCURATE OR RELIABLE, (iv) THE QUALITY OF ANY PRODUCTS, SERVICES, OR MATERIALS DESCRIBED ON THIS WEBSITE WILL MEET YOUR EXPECTATIONS, OR (v) ANY ERRORS WILL BE CORRECTED. WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF TITLE, MERCHANTABILITY, OR FITNESS FOR A PARTICULAR PURPOSE, WITH RESPECT TO THIS WEBSITE. YOU AGREE THAT YOU ASSUME ALL RISKS RELATED TO THE QUALITY, PERFORMANCE, AND ACCURACY OF THE CONTENT ON THIS WEBSITE. DOCPLIX SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM THE USE OF OR INABILITY TO USE THIS WEBSITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. ANY PRICES LISTED ON THIS WEBSITE ARE NON-BINDING. WE ARE NOT LIABLE FOR THE AVAILABILITY OF PRODUCTS OR SERVICES AT THE DISPLAYED PRICES. ANY AVAILABILITY INFORMATION PROVIDED ON THIS WEBSITE IS ALSO NON-BINDING, AND WE SHALL NOT BE LIABLE FOR THE AVAILABILITY OF PRODUCTS OR SERVICES LISTED ON THIS WEBSITE.`}
//           />

//           {/* Other Sections */}
//           <Section
//             title="User-Submitted Content"
//             content={`"User-Submitted Content" refers to any information or content you provide to Docplix while using this website. You represent and warrant that: (i) you own or have all necessary rights to the content you provide and the rights to use it as outlined in these Terms of Use; (ii) all information you provide is true, accurate, current, and complete, and does not violate these Terms of Use; (iii) the content will not cause harm to any person or entity; and (iv) the content does not infringe on any third party's copyright, patent, or trademark rights.`}
//           />

//           <Section
//             title="External Links"
//             content={`Docplix may provide links to third-party websites for your convenience. However, these links should not be interpreted as an endorsement of the content, products, or activities of those websites. Accessing third-party websites through links on this website is done at your own risk.`}
//           />

//           <Section
//             title="Personal Data"
//             content={`You acknowledge and agree that Docplix may use the data collected during your use of this website for the purposes outlined in our Privacy Policy, which is incorporated by reference into these Terms of Use.`}
//           />

//           <Section
//             title="Changes to Terms"
//             content={`The content of this website, including these Terms of Use, may be updated or modified by Docplix at any time without prior notice. We reserve the right to amend these Terms of Use at our sole discretion. Any changes or modifications will take effect as of the "Last Updated Date" indicated at the top of this page. We encourage you to review these Terms of Use periodically to stay informed of any updates.`}
//           />

//           <Section
//             title="Governing Law"
//             content={`These Terms of Use are governed by the laws of India, and any disputes arising from or related to these terms shall be subject to the exclusive jurisdiction of the courts in New Delhi.`}
//           />
//         </div>
//       </main>

//       {/* Footer stays at bottom */}
//       <SimpleFooter />
//     </div>
//   );
// };

// // Section component to reduce repetition
// const Section = ({ title, content }) => (
//   <>
//     <h2 className="text-base sm:text-lg font-semibold mb-2">{title}</h2>
//     <p className="text-brand-text mb-6 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
//       {content}
//     </p>
//   </>
// );

// export default TermsandCondition;
import React from "react";
import SimpleFooter from "../components/sections/SimpleFooter";

const TermsandCondition = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex justify-center px-4 sm:px-6 lg:px-8 py-12 flex-1">
        <div className="max-w-4xl w-full">
          {/* Responsive Badge */}
          <div className="flex justify-center mb-4">
            <span className="inline-block text-xs font-normal text-brand-text bg-gray-100 px-3 py-1 rounded-full">
              Terms
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-center mb-2">
            Terms of Use
          </h1>
          <p className="text-center text-brand-text mb-8 text-sm sm:text-base">
            Last updated on 15 March 2025.
          </p>

          {/* Introduction */}
          <p className="text-brand-text mb-6 text-sm sm:text-base leading-relaxed">
            This website is operated and managed by Docplix Solutions Private
            Limited (referred to as "Docplix"). Your access to and use of this
            website are governed by the following terms of use (referred to as
            "Terms of Use"). By using this website, you agree to be bound by
            these Terms of Use. If you do not agree to these terms, please
            refrain from using this website.
          </p>

          {/* Website Usage */}
          <Section
            title="Website Usage"
            content={`All content published on this website, including but not limited to text, photographs, graphics, images, illustrations, trademarks, logos, audio or video clips, and animations, is protected by copyrights, trademarks, or other intellectual property rights owned by Docplix or its partners. You are prohibited from modifying, publishing, transmitting, participating in the transfer or sale of, reproducing, creating derivative works from, distributing, or exploiting any of the materials or content on this website, in whole or in part. The technology and software underlying this website are the property of Docplix. You agree not to disrupt or compromise the security of the website, or any services, systems, accounts, servers, or networks connected to or accessible through the website. You also agree not to interfere with other users' enjoyment of the website, and not to upload, post, or transmit any viruses or other harmful, disruptive, or destructive files through the website. Furthermore, you agree not to use this website to seek, provide, or obtain specific medical advice, diagnoses, or treatments for any individual's particular condition or situation.`}
          />

          {/* Disclaimer of Liability */}
          <Section
            title="Disclaimer of Liability"
            content={`Docplix disclaims any responsibility for the deletion, failure to store, mis-delivery, or untimely delivery of any information or materials. We are not liable for any service outages caused by server maintenance, technology failures, service provider issues (including telecommunications, hosting, and power providers), computer viruses, natural disasters, acts of nature, war, civil disturbances, or any other events beyond our reasonable control.\n\nWE DO NOT GUARANTEE THAT THIS WEBSITE WILL BE UNINTERRUPTED OR ERROR-FREE. FURTHERMORE, WE DO NOT MAKE ANY WARRANTIES REGARDING THE CONTENT ON THIS WEBSITE. THIS WEBSITE AND ITS CONTENT ARE PROVIDED ON AN "AS IS, AS AVAILABLE" BASIS. ANY MATERIALS YOU DOWNLOAD OR OBTAIN THROUGH THIS WEBSITE ARE AT YOUR OWN DISCRETION AND RISK, AND YOU ARE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT MAY RESULT FROM DOWNLOADING SUCH MATERIALS. WE DO NOT WARRANT THAT (i) THIS WEBSITE WILL MEET YOUR REQUIREMENTS, (ii) THE WEBSITE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (iii) THE RESULTS OBTAINED FROM USING THIS WEBSITE WILL BE ACCURATE OR RELIABLE, (iv) THE QUALITY OF ANY PRODUCTS, SERVICES, OR MATERIALS DESCRIBED ON THIS WEBSITE WILL MEET YOUR EXPECTATIONS, OR (v) ANY ERRORS WILL BE CORRECTED. WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF TITLE, MERCHANTABILITY, OR FITNESS FOR A PARTICULAR PURPOSE, WITH RESPECT TO THIS WEBSITE. YOU AGREE THAT YOU ASSUME ALL RISKS RELATED TO THE QUALITY, PERFORMANCE, AND ACCURACY OF THE CONTENT ON THIS WEBSITE. DOCPLIX SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM THE USE OF OR INABILITY TO USE THIS WEBSITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. ANY PRICES LISTED ON THIS WEBSITE ARE NON-BINDING. WE ARE NOT LIABLE FOR THE AVAILABILITY OF PRODUCTS OR SERVICES AT THE DISPLAYED PRICES. ANY AVAILABILITY INFORMATION PROVIDED ON THIS WEBSITE IS ALSO NON-BINDING, AND WE SHALL NOT BE LIABLE FOR THE AVAILABILITY OF PRODUCTS OR SERVICES LISTED ON THIS WEBSITE.`}
          />

          {/* Other Sections */}
          <Section
            title="User-Submitted Content"
            content={`"User-Submitted Content" refers to any information or content you provide to Docplix while using this website. You represent and warrant that: (i) you own or have all necessary rights to the content you provide and the rights to use it as outlined in these Terms of Use; (ii) all information you provide is true, accurate, current, and complete, and does not violate these Terms of Use; (iii) the content will not cause harm to any person or entity; and (iv) the content does not infringe on any third party's copyright, patent, or trademark rights.`}
          />

          <Section
            title="External Links"
            content={`Docplix may provide links to third-party websites for your convenience. However, these links should not be interpreted as an endorsement of the content, products, or activities of those websites. Accessing third-party websites through links on this website is done at your own risk.`}
          />

          <Section
            title="Personal Data"
            content={`You acknowledge and agree that Docplix may use the data collected during your use of this website for the purposes outlined in our Privacy Policy, which is incorporated by reference into these Terms of Use.`}
          />

          <Section
            title="Changes to Terms"
            content={`The content of this website, including these Terms of Use, may be updated or modified by Docplix at any time without prior notice. We reserve the right to amend these Terms of Use at our sole discretion. Any changes or modifications will take effect as of the "Last Updated Date" indicated at the top of this page. We encourage you to review these Terms of Use periodically to stay informed of any updates.`}
          />

          <Section
            title="Governing Law"
            content={`These Terms of Use are governed by the laws of India, and any disputes arising from or related to these terms shall be subject to the exclusive jurisdiction of the courts in New Delhi.`}
          />
        </div>
      </main>

      {/* Footer stays at bottom */}
      <SimpleFooter />
    </div>
  );
};

// Section component to reduce repetition
const Section = ({ title, content }) => (
  <>
    <h2 className="text-base sm:text-lg font-semibold mb-2">{title}</h2>
    <p className="text-brand-text mb-6 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
      {content}
    </p>
  </>
);

export default TermsandCondition;
