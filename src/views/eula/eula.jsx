import React from 'react';
import {render} from 'react-dom';
import NavBar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx';

import './eula.scss';

const Eula = () => (
    <div>
        <NavBar />
        <div id="content">
            <div className="content-section">
                <h1>END USER LICENSE AGREEMENT</h1>
                <p>
                    This End User License Agreement (&apos;Agreement&apos;) applies to the ScratchJr Application
                    developed collaboratively by the
                    Massachusetts Institute of Technology (&apos;MIT&apos;) and the
                    Trustees of Tufts College (&apos;Tufts University&apos;
                    or &apos;Tufts&apos;), collectively the Licensors
                    (&apos;Licensors&apos;), which is licensed, not sold,
                    to the End User for use in accordance with
                    the terms and conditions herein.
                </p>
                <h2>1. Definitions</h2>
                <p>
                    End User. An End-User is either (1) an individual
                    (&apos;Individual&apos;), (2) an Individual
                    Qualified Educational Institution; or (3) a Corporation. An &apos;Individual&apos; means a
                    person acquiring the Application for personal use, not for redistribution. An
                    &apos;Individual Qualified Educational Institution&apos; means an organization acquiring the
                    Application for its own internal use for faculty, staff and students including (A) a
                    public or private entity, the primary mission of which is directly involved in, or in
                    support of, instruction rather than research, and that is a bona fide, educational
                    institution organized and operated solely for PreK-12 educational purposes; (B) a
                    division or department of a public or private institution of higher learning; or (C) a
                    public or private entity, the primary mission of which is directly involved in, or in
                    support of instruction, organized solely for in-service teacher education. A
                    Corporation is any entity or organization other than an Individual Qualified
                    Educational Institution that acquires the Application for organizational use.
                </p>
                <p>
                    APPLICATION. &apos;Application,&apos; as used in this agreement, includes the ScratchJr
                    Application, its underlying source code and all upgrades made thereto. The Licensors
                    are not obligated to provide upgrades under this agreement.
                </p>
                <h2>2. Scope Of License</h2>
                <p>
                    License Grant. This agreement grants to End User a restricted, revocable,
                    nonexclusive, nontransferable, and non-assignable license
                    (the &apos;License&apos;) to use the
                    Application on an Android device that the End User owns or controls. This agreement
                    shall govern upgrades to the application that repair, replace or enhance the original
                    product.
                </p>
                <p>
                    End User shall not: (1) Distribute the application, including making it available over
                    a network where it could be used by multiple devices at the same time; (2) Transfer,
                    rent, lease, lend, sell, redistribute, or sublicense the application; (3) Copy,
                    decompile, reverse engineer, disassemble, attempt to derive the source code, modify,
                    or create derivative works of the application; (4) Ship, transfer, export into any
                    country, or use the application in any manner prohibited by the United States Export
                    Administration Act or any other export laws, restrictions, or regulations; (5) Export
                    or re-export the application into any United States embargoed countries or to anyone
                    on the United States Treasury Department list of Specially Designated Nationals or the
                    United States Department of Commerce Denied Person&apos;s List or Entity List; (6) Be
                    located in any country or named on any list designated in (5) above; or (7) Use the
                    Application in any manner prohibited by law. Any attempt to breach the foregoing shall
                    be deemed a material breach of this agreement and is subject to damages. The Licensors
                    reserve the right, in their discretion, to terminate the License at any time, and to
                    change, suspend, remove, or disable access to the application.
                </p>
                <p>
                    If the application enables access to third-party programs or websites, the End User
                    may be required to accept the third party&apos;s additional terms. Licensors are not
                    responsible for examining or evaluating the content, accuracy, completeness,
                    timeliness, validity, legality, decency, quality, or other aspect of any third-party
                    program or website. End User agrees to use third-party products and service at End
                    User&apos;s sole risk. Licensors shall not be liable to the End User for harms arising from
                    End User&apos;s access to or use of third-party products, services or content.
                </p>
                <h2>3. Intellectual Property</h2>
                <p>
                    Reservation Of Rights. The software, content, visual interfaces, interactive features,
                    information, graphics, design, compilation, computer code and all other elements of
                    the Application (the &apos;ScratchJr Materials&apos;),
                    are protected by copyright, trade dress,
                    patent, and trademark laws of the United States and other jurisdictions, international
                    conventions, and all other relevant intellectual property and proprietary rights, and
                    applicable laws. All ScratchJr Materials, including intellectual property rights
                    therein and thereto, are the property of the licensors. The licensors reserve all
                    rights not expressly granted in this agreement. End User shall not acquire any right,
                    title or interest to the ScratchJr Materials, whether by implication, estoppel, or
                    otherwise, except for the limited rights set forth in this agreement. To the extent
                    this agreement authorizes End User to make copies of the application, End User shall
                    ensure that any such copies contain the same copyright and proprietary notices that
                    appear in the copy of the application the End User downloaded. Nothing in this
                    agreement grants any copyrights, trademark rights, patent rights, trade secret
                    protection, or other intellectual property rights to End User.
                </p>
                <p>
                    In the event that a third party claims that the application infringes that third
                    party&apos;s intellectual property rights, the licensors will be solely responsible for the
                    investigation, defense, settlement, and discharge of any such intellectual property
                    infringement claim, provided that End User promptly notifies the licensors in writing
                    of any such claim and licensors are permitted to control fully the defense and any
                    settlement of such claim. End User shall cooperate with licensors in the defense of
                    such claim. End User shall not undertake any action in response to any infringement or
                    alleged infringement of the Application that would be prejudicial to any defense that
                    Licensors may have to the same. Notwithstanding the foregoing, such indemnity shall
                    not apply if the alleged infringement results from use of the application in
                    conjunction with any other software, the combination of the application with equipment
                    not approved by licensor, or unlicensed activities, including, without limitation,
                    unauthorized modification of the application.
                </p>
                <h2>4. Disclaimer Of Warranty</h2>
                <p>
                    THE APPLICATION IS PROVIDED FREE OF CHARGE AND &apos;AS IS,&apos; WITHOUT WARRANTIES OF ANY
                    KIND, EXPLICIT OR IMPLICIT. WARRANTIES DISCLAIMED INCLUDE BUT ARE NOT LIMITED TO THOSE
                    REGARDING FREEDOM FROM DEFECTS, FREEDOM FROM VIRUSES, THE ABILITY TO OPERATE
                    CONTINUOUSLY, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, SATISFACTORY QUALITY,
                    AND NON-INTERFERENCE. THE END USER BEARS THE ENTIRE RISK AS TO THE QUALITY AND
                    PERFORMANCE OF THE APPLICATION. LICENSORS DO NOT WARRANT OR REPRESENT THAT THE USE OF
                    THE APPLICATION WILL NOT INFRINGE ANY PATENTS, COPYRIGHTS, TRADEMARKS, OR OTHER RIGHTS
                    OF THIRD PARTIES OR THAT DEFECTS IN THE APPLICATION WILL BE CORRECTED. LICENSORS SHALL
                    NOT BE LIABLE FOR ANY LIABILITY OR DAMAGES WITH RESPECT TO ANY CLAIM BY THE END USER
                    OR ANY THIRD PARTY ARISING FROM THE LICENSE GRANTED OR USE OF THE APPLICATION. THE END
                    USER SHALL BEAR THE ENTIRE COST OF ANY SERVICES AND REPAIRS TO THE APPLICATION. THIS
                    DISCLAIMER OF WARRANTY IS AN ESSENTIAL PART OF THIS AGREEMENT. NO ORAL OR WRITTEN
                    INFORMATION OR ADVICE PROVIDED BY LICENSORS OR THE APPLICATION PROVIDER SHALL CREATE A
                    WARRANTY. NO USE OF THE APPLICATION IS AUTHORIZED HEREUNDER EXCEPT UNDER THIS
                    DISCLAIMER.
                </p>
                <h2>5. Limitation Of Liability</h2>
                <p>
                    LICENSORS SHALL NOT BE LIABLE FOR PERSONAL INJURY, PROPERTY DAMAGE, DATA LOSS, LOSS OF
                    USE, BUSINESS INTERRUPTION, DAMAGES OR LOSSES UNDER ANY THEORY OF LAW OR EQUITY, OR
                    FOR ANY INDIRECT, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE
                    OF OR INABILITY TO USE THE APPLICATION, INCLUDING WITHOUT LIMITATION, COMPUTER FAILURE
                    OR MALFUNCTION OR FOR ANY OTHER COMMERCIAL DAMAGES OR LOSSES, EVEN IF ADVISED OF THE
                    POSSIBILITY THEREOF, AND REGARDLESS OF THE LEGAL OR EQUITABLE THEORY, WHETHER IN
                    CONTRACT, TORT OR OTHERWISE, UPON WHICH THE CLAIM IS BASED. THE END USER IS LIABLE FOR
                    ALL DAMAGES WITHOUT LIMITATION THAT ARE CAUSED BY ABUSE OF THE APPLICATION. THE END
                    USER HAS NO RIGHT TO CLAIM ANY INDEMNIFICATION BASED ON THE END USER&apos;S USE OF THE
                    APPLICATION.
                </p>
                <h2>6. Content</h2>
                <p>
                    To the extent that the application allows for the creation of user-generated content
                    and images, the End User represents and warrants that: (1) End User is the owner or
                    authorized user of all of the content generated by the End User; (2) End User will
                    not transmit or distribute content that advocates, promotes, incites, instructs,
                    informs, assists, or otherwise encourages violence or any illegal activities;
                    infringes or violates the copyright, patent, trademark, service mark, trade name,
                    trade secret, or other intellectual property rights of any third party, or of any
                    right of privacy or publicity; contains inappropriate, harassing, abusive, profane,
                    hateful, defamatory, libelous, threatening, obscene, indecent, vulgar, pornographic or
                    otherwise objectionable or unlawful content; is harmful to minors; or violates any
                    law, statute, ordinance, or regulation. Licensors shall not be liable for content
                    created by the End User using the application.
                </p>
                <p>
                    To the maximum extent permitted by law, End User agrees to defend, indemnify and hold
                    licensors harmless from any and all claims, suits, losses, liability, costs or
                    expenses, including but not limited to reasonable attorneys&apos; fees, arising from or
                    incurred as a result of End User&apos;s use of the application or any breach by End User of
                    this Agreement.
                </p>
                <h2>7. Consent To Use Data</h2>
                <p>
                    Licensors may collect and use End User technical data and related information to
                    facilitate application updates and other uses. Licensors may use End User information
                    that does not personally identify the End User to improve the application and to
                    conduct academic research.
                </p>
                <h2>8. Commercial Items</h2>
                <p>
                    Notice to US. government End Users. The application and related documentation are
                    &apos;Commercial Items,&apos; as that term is defined in 48 C.F.R. ¤ 2.101, consisting of
                    &apos;Commercial Computer Software&apos; and &apos;Commercial
                    Computer Software Documentation,&apos; as
                    such terms are used in 48 C.F.R. ¤ 12.212 or 48 C.F.R. ¤ 227.7202, as applicable. The
                    application is being licensed to U.S. Government End Users (A) only as commercial
                    items and (B) with only those rights as are granted to all other End Users pursuant to
                    the terms and conditions herein.
                </p>
                <h2>9. Termination</h2>
                <p>
                    This Agreement is effective until terminated. End User&apos;s rights under this Agreement
                    will terminate automatically without notice if End User fails to comply with any of
                    the terms herein. Upon termination End User shall cease all use of the application and
                    shall destroy all copies of the application, including related documentation.
                </p>
                <h2>10. Miscellanous</h2>
                <p>
                    Entire Agreement. This Agreement represents the entire understanding between the
                    Licensor and End User with respect to its subject matter and supersedes all
                    contemporaneous and previous statements, representations, agreements, and
                    understandings pertaining to the subject matter hereof.
                </p>
                <p>
                    Severability. In the event that any provision of this agreement is determined by a
                    court of competent jurisdiction to be invalid or unenforceable, the remaining
                    provisions of this agreement shall be valid and enforceable to the extent permitted by
                    law. Waiver. The failure of the Licensors to enforce any of the terms and conditions
                    of this agreement shall not be construed as a waiver of such term, condition or right.
                </p>
                <p>
                    Governing Law. This agreement will be governed by the laws of the Commonwealth of
                    Massachusetts, excluding the application of its conflict of laws principles. This
                    agreement will not be governed by the United Nations Convention on Contracts for the
                    international sale of goods, the application of which is expressly excluded.
                </p>
                <p>
                    Amendment. From time to time we may modify or amend this agreement. In the event that
                    we do, you will be able to review the amended agreement, and we will ask you if you
                    agree to be bound by all the modified terms. If you agree to the modified terms, they
                    will apply to your use of the application from that point forward. If you do not agree
                    to the modified terms, you may not be able to continue to use the application.
                </p>
                <h2>11. Embargoes And Restrictions</h2>
                <p>
                    End User hereby represents and warrants that End User (1) is not located in a country
                    that is subject to a U.S. government embargo, or that has been designated by the U.S.
                    government as a &apos;terrorist supporting&apos; country; and (2) is not listed on any U.S.
                    government list of prohibited or restricted parties.
                </p>
                <p>
                    If the Licensors provide a translation of the English language version of this
                    agreement, the translation is provided solely for convenience, and the English version
                    shall prevail.
                </p>
                <p>
                    End User questions, complaints, or claims with respect to the application should be
                    directed to: Eliot-Pearson Department of Child Development, Department of Computer
                    Sciences, Tufts University, Office #164, 105 College Avenue, Medford, MA 02155;
                    Email: Marina.Bers@tufts.edu; Phone: (617) 627-4490; and Mitchel Resnick, Professor of
                    Learning Research, MIT Media Laboratory, 75 Amherst Street, Cambridge, MA 02142;
                    Email: mres@media.mit.edu; Phone: (617) 253-9783.
                </p>
            </div>
        </div>
        <Footer />
    </div>
);

render(
    <Eula />,
    document.getElementById('app'));
