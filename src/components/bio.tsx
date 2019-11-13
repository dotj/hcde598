import * as React from 'react'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Bio = () => (
  <div>
    <div
      style={{
        margin: '0 auto',
        maxWidth: '60rem',
      }}
    >
      <p>
      Hi, I'm Julie!
      </p>

      <p>
      I currently work full time as a software developer and have a background in robotics and media art. I've dabbled with various fabrication techniques before but always in the context of a larger project. I'm hoping to gain more experience and have the opportunity to be creative in this course.
      </p>

      <p>
      Feel free to ask me questions about command line/terminal or Git/Github. I also have some limited familiarity with HTML/CSS, laser cutters, CNC milling, and 3D printers. Slack or email me @julietdo!
      </p>
    </div>
  </div>
)

export default Bio
