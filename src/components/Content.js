import React from "react";
import "./Content.css";

function Content() {
  return (
    <div className="content">
      <h1>our story</h1>

      <div className="para-info">
        <p className="p1">
          Shortly after graduating from Ole Miss in 2016, Kate Hayes moved to
          New York City and began babysitting in her free time for a family she
          met through Mississippi connections. <br />
          They were hospitable to her, and quickly started to feel like family.
          As their relationship grew, both parties introduced each other to
          their respective friends. Kate then noticed other families' need for
          summer nannies and college girls’ interest in this unique opportunity.
          Thus the Nanny Network was born.
        </p>
        <p className="p2">
          Hartwell Furr is from Jackson, Mississippi, and first got involved
          with Nanny Network after her freshman year. After three consecutive
          summers of nannying, Hartwell developed a keen insight into what makes
          an excellent candidate. She understands that children are
          impressionable, and having a nanny serve as a strong role model is
          crucial for their development. This small word-of-mouth agency has
          slowly evolved into something special, and in 2020 Hartwell partnered
          with Kate to help carefully curate pairings of students and families.
          Hartwell continued this partnership with Kate for two years and saw
          firsthand how this hand-picked process forms many mutually beneficial
          relationships.
        </p>
        <p className="p3">
          Fast forward to September 2022, Hartwell Furr has taken on the
          ownership of Nanny Network in hopes of continuing this great business
          model. <br />
          The mission has never changed: sourcing stellar girls for wonderful
          families. Quality pairings are ensured by keeping the recruiting
          process selective and family interest referral-based. Nanny Network is
          a tight-knit community that relies on our nannies' hard work ethic and
          communication skills. Hartwell looks forward to introducing quality
          girls with amazing families and continuing the tradition of building
          lifelong relationships.
        </p>
      </div>

      <div className="author-info">
        <img alt="author" src="assets/img/author.JPG" />
        <span>Owner, Hartwell Furr</span>
        <hr />
        <div className="contact-info">
          <span>
            <i className="fa-solid fa-envelope" />
            nannynetworkny@gmail.com
          </span>
          <span>
            <i className="fa-solid fa-phone" />
            (601) 503-4486
          </span>
        </div>
      </div>
    </div>
  );
}

export default Content;
