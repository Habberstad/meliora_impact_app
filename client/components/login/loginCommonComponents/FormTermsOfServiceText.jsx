import { Link } from "react-router-dom";
import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";
import { termsAndPolicyModalStyle } from "../../wrapped/modal-style";

export function FormTermsOfServiceText() {
  const [policy, setPolicy] = useState(false);
  const policyHandleOpen = () => setPolicy(true);
  const policyHandleClose = () => setPolicy(false);

  const [terms, setTerms] = useState(false);
  const termsHandleOpen = () => setTerms(true);
  const termsHandleClose = () => setTerms(false);

  return (
    <div className={"bottom-text-container"}>
      <p className={"bottom-text"}>
        By registering, I agree to Minimal
        <Button
          onClick={termsHandleOpen}
          sx={{ textDecoration: "none", color: "#000" }}
        >
          <strong> Terms of Service</strong>{" "}
        </Button>
        and
        <Button
          onClick={policyHandleOpen}
          style={{ textDecoration: "none", color: "#000" }}
        >
          <strong> Privacy Policy.</strong>{" "}
        </Button>
      </p>

      <Modal open={policy} onClose={policyHandleClose}>
        <Box sx={termsAndPolicyModalStyle}>
          <div className="terms-and-policy-modal-container">
            <h1>Privacy Policy for Meliora Impact</h1>

            <p>
              At Meliora Connect, accessible from
              https://meliora-impact-connect.herokuapp.com/, one of our main
              priorities is the privacy of our visitors. This Privacy Policy
              document contains types of information that is collected and
              recorded by Meliora Connect and how we use it.
            </p>

            <p>
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
            </p>

            <p>
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in Meliora Connect. This policy is
              not applicable to any information collected offline or via
              channels other than this website.
            </p>

            <h2>Consent</h2>

            <p>
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </p>

            <h2>Information we collect</h2>

            <p>
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information.
            </p>
            <p>
              If you contact us directly, we may receive additional information
              about you such as your name, email address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide.
            </p>
            <p>
              When you register for an Account, we may ask for your contact
              information, including items such as name, company name, address,
              email address, and telephone number.
            </p>

            <h2>How we use your information</h2>

            <p>
              We use the information we collect in various ways, including to:
            </p>

            <ul>
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>
                Communicate with you, either directly or through one of our
                partners, including for customer service, to provide you with
                updates and other information relating to the website, and for
                marketing and promotional purposes
              </li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h2>Log Files</h2>

            <p>
              Meliora Connect follows a standard procedure of using log files.
              These files log visitors when they visit websites. All hosting
              companies do this and a part of hosting services' analytics. The
              information collected by log files include internet protocol (IP)
              addresses, browser type, Internet Service Provider (ISP), date and
              time stamp, referring/exit pages, and possibly the number of
              clicks. These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users' movement on the
              website, and gathering demographic information.
            </p>

            <h2>Cookies and Web Beacons</h2>

            <p>
              Like any other website, Meliora Connect uses 'cookies'. These
              cookies are used to store information including visitors'
              preferences, and the pages on the website that the visitor
              accessed or visited. The information is used to optimize the
              users' experience by customizing our web page content based on
              visitors' browser type and/or other information.
            </p>

            <h2>Advertising Partners Privacy Policies</h2>

            <p>
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of Meliora Connect.
            </p>

            <p>
              Third-party ad servers or ad networks uses technologies like
              cookies, JavaScript, or Web Beacons that are used in their
              respective advertisements and links that appear on Meliora
              Connect, which are sent directly to users' browser. They
              automatically receive your IP address when this occurs. These
              technologies are used to measure the effectiveness of their
              advertising campaigns and/or to personalize the advertising
              content that you see on websites that you visit.
            </p>

            <p>
              Note that Meliora Connect has no access to or control over these
              cookies that are used by third-party advertisers.
            </p>

            <h2>Third Party Privacy Policies</h2>

            <p>
              Meliora Connect's Privacy Policy does not apply to other
              advertisers or websites. Thus, we are advising you to consult the
              respective Privacy Policies of these third-party ad servers for
              more detailed information. It may include their practices and
              instructions about how to opt-out of certain options.{" "}
            </p>

            <p>
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers'
              respective websites.
            </p>

            <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>

            <p>
              Under the CCPA, among other rights, California consumers have the
              right to:
            </p>
            <p>
              Request that a business that collects a consumer's personal data
              disclose the categories and specific pieces of personal data that
              a business has collected about consumers.
            </p>
            <p>
              Request that a business delete any personal data about the
              consumer that a business has collected.
            </p>
            <p>
              Request that a business that sells a consumer's personal data, not
              sell the consumer's personal data.
            </p>
            <p>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>

            <h2>GDPR Data Protection Rights</h2>

            <p>
              We would like to make sure you are fully aware of all of your data
              protection rights. Every user is entitled to the following:
            </p>
            <p>
              The right to access – You have the right to request copies of your
              personal data. We may charge you a small fee for this service.
            </p>
            <p>
              The right to rectification – You have the right to request that we
              correct any information you believe is inaccurate. You also have
              the right to request that we complete the information you believe
              is incomplete.
            </p>
            <p>
              The right to erasure – You have the right to request that we erase
              your personal data, under certain conditions.
            </p>
            <p>
              The right to restrict processing – You have the right to request
              that we restrict the processing of your personal data, under
              certain conditions.
            </p>
            <p>
              The right to object to processing – You have the right to object
              to our processing of your personal data, under certain conditions.
            </p>
            <p>
              The right to data portability – You have the right to request that
              we transfer the data that we have collected to another
              organization, or directly to you, under certain conditions.
            </p>
            <p>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>

            <h2>Children's Information</h2>

            <p>
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </p>

            <p>
              Meliora Connect does not knowingly collect any Personal
              Identifiable Information from children under the age of 13. If you
              think that your child provided this kind of information on our
              website, we strongly encourage you to contact us immediately and
              we will do our best efforts to promptly remove such information
              from our records.
            </p>
          </div>
        </Box>
      </Modal>

      <Modal open={terms} onClose={termsHandleClose}>
        <Box sx={termsAndPolicyModalStyle}>
          <div className="meliora-wrapped-share-modal">
            <h1>Website Terms and Conditions of Use</h1>

            <h2>1. Terms</h2>

            <p>
              By accessing this Website, accessible from
              https://meliora-impact-connect.herokuapp.com/, you are agreeing to
              be bound by these Website Terms and Conditions of Use and agree
              that you are responsible for the agreement with any applicable
              local laws. If you disagree with any of these terms, you are
              prohibited from accessing this site. The materials contained in
              this Website are protected by copyright and trade mark law.
            </p>

            <h2>2. Use License</h2>

            <p>
              Permission is granted to temporarily download one copy of the
              materials on Meliora Impact's Website for personal, non-commercial
              transitory viewing only. This is the grant of a license, not a
              transfer of title, and under this license you may not:
            </p>

            <ul>
              <li>modify or copy the materials;</li>
              <li>
                use the materials for any commercial purpose or for any public
                display;
              </li>
              <li>
                attempt to reverse engineer any software contained on Meliora
                Impact's Website;
              </li>
              <li>
                remove any copyright or other proprietary notations from the
                materials; or
              </li>
              <li>
                transferring the materials to another person or "mirror" the
                materials on any other server.
              </li>
            </ul>

            <p>
              This will let Meliora Impact to terminate upon violations of any
              of these restrictions. Upon termination, your viewing right will
              also be terminated and you should destroy any downloaded materials
              in your possession whether it is printed or electronic format.
              These Terms of Service has been created with the help of the{" "}
              <a href="https://www.termsofservicegenerator.net">
                Terms Of Service Generator
              </a>
              .
            </p>

            <h2>3. Disclaimer</h2>

            <p>
              All the materials on Meliora Impact’s Website are provided "as
              is". Meliora Impact makes no warranties, may it be expressed or
              implied, therefore negates all other warranties. Furthermore,
              Meliora Impact does not make any representations concerning the
              accuracy or reliability of the use of the materials on its Website
              or otherwise relating to such materials or any sites linked to
              this Website.
            </p>

            <h2>4. Limitations</h2>

            <p>
              Meliora Impact or its suppliers will not be hold accountable for
              any damages that will arise with the use or inability to use the
              materials on Meliora Impact’s Website, even if Meliora Impact or
              an authorize representative of this Website has been notified,
              orally or written, of the possibility of such damage. Some
              jurisdiction does not allow limitations on implied warranties or
              limitations of liability for incidental damages, these limitations
              may not apply to you.
            </p>

            <h2>5. Revisions and Errata</h2>

            <p>
              The materials appearing on Meliora Impact’s Website may include
              technical, typographical, or photographic errors. Meliora Impact
              will not promise that any of the materials in this Website are
              accurate, complete, or current. Meliora Impact may change the
              materials contained on its Website at any time without notice.
              Meliora Impact does not make any commitment to update the
              materials.
            </p>

            <h2>6. Links</h2>

            <p>
              Meliora Impact has not reviewed all of the sites linked to its
              Website and is not responsible for the contents of any such linked
              site. The presence of any link does not imply endorsement by
              Meliora Impact of the site. The use of any linked website is at
              the user’s own risk.
            </p>

            <h2>7. Site Terms of Use Modifications</h2>

            <p>
              Meliora Impact may revise these Terms of Use for its Website at
              any time without prior notice. By using this Website, you are
              agreeing to be bound by the current version of these Terms and
              Conditions of Use.
            </p>

            <h2>8. Your Privacy</h2>

            <p>Please read our Privacy Policy.</p>

            <h2>9. Governing Law</h2>

            <p>
              Any claim related to Meliora Impact's Website shall be governed by
              the laws of no without regards to its conflict of law provisions.
            </p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
