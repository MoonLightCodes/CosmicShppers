import React, { useEffect, useRef } from 'react';

const TermsAndConditions = () => {
    const termsText = `
        Welcome to Cosmic Shoppers! By using our website, you agree to the following terms and conditions:

        1. Acceptance of Terms
        By accessing or using our website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website.

        2. Eligibility
        You must be at least 18 years old to use this site. By using this site, you represent and warrant that you meet this eligibility requirement.

        3. Use of Content
        All content on this site is for informational purposes only. You may not copy, reproduce, distribute, or create derivative works from any content on this site without prior written permission from us.

        4. User Conduct
        You agree not to use our website for any unlawful purpose or in any way that could harm, disable, overburden, or impair the site. You also agree not to interfere with the security of the site or attempt to gain unauthorized access to any part of the site.

        5. Intellectual Property
        All intellectual property rights, including trademarks, logos, and copyrights, are owned by Cosmic Shoppers or its licensors. Unauthorized use of any intellectual property is strictly prohibited.

        6. Third-Party Links
        Our website may contain links to third-party websites. We are not responsible for the content, policies, or practices of any third-party websites. Accessing these links is at your own risk.

        7. Disclaimer of Warranties
        The website and its content are provided "as is" without any warranties of any kind, either express or implied. We do not guarantee the accuracy, completeness, or reliability of any content on the site.

        8. Limitation of Liability
        To the fullest extent permitted by law, Cosmic Shoppers shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of the website.

        9. Indemnification
        You agree to indemnify and hold harmless Cosmic Shoppers, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, or expenses arising out of your use of the website or violation of these terms.

        10. Modifications to Terms
        We reserve the right to modify these terms at any time without prior notice. Your continued use of the website after any changes constitutes your acceptance of the new terms.

        11. Termination
        We reserve the right to terminate or suspend your access to the website at our sole discretion, without notice, for conduct that we believe violates these terms or is harmful to other users or the website.

        12. Governing Law
        These terms are governed by and construed in accordance with the laws of the jurisdiction in which Cosmic Shoppers operates. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.

        13. Privacy Policy
        Your use of the website is also governed by our Privacy Policy, which is incorporated into these terms by reference. Please review our Privacy Policy to understand our practices regarding your personal information.

        14. Entire Agreement
        These Terms and Conditions constitute the entire agreement between you and Cosmic Shoppers regarding your use of the website and supersede any prior agreements or understandings.

        15. Contact Information
        If you have any questions or concerns about these terms, please contact us at support@cosmicshoppers.com.

        Please read these terms carefully before using our services. By continuing to use the website, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
    `;

    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollTop += 1;
                
            }
        }, 50);

        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <div className='text-center text-white m-2 '>
            <h1>Terms and Conditions</h1>
            <div
            className='remScroll'
                ref={scrollRef}
                style={{
                    height: '80vh',
                    overflow: 'auto',
                    border: '1px solid #ccc',
                    padding: '10px',
                }}
            >
                {termsText}
            </div>
        </div>
    );
};

export default TermsAndConditions;
