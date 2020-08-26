import { openpopup } from './openpopup';
import { MISC, SELECTORS } from '../Constants/index';

/**
 * A SocialShare module which handles Facebook and Twitter social share buttons
 *
 * @class SocialShare
 */
export class SocialShare {
    constructor() {
        /**
        * OGINFO
        *
        * An object containing OG tag data pulled from og tags
        *
        * @type {Object}
        * @ignore
        */
        this.OGINFO = {
            DESC: null,
            URL: null,
            TITLE: null,
        };

        this.OGSTRINGS = {
            OGDESC: 'meta[property="og:description"]',
            OGTITLE: 'meta[property="og:title"]',
            OGURL: 'meta[property="og:url"]',
        };
    }

    /**
    * Get OG data from page's OG tags
    * Set defaults if no tags available
    *
    * @return {Object} SocialShare A reference to the instance of the class
    * @chainable
    */
    getOGData() {
        // First, see if we get the URL from a FB OG tag
        Object.keys(this.OGINFO).forEach((key) => {
            let node = document.querySelector(this.OGSTRINGS[`OG${ key}`]);

            if (node) {
                this.OGINFO[key] = node.getAttribute('content');
            }
        });

        // if not, is there a canoical URL?
        if (!this.OGINFO.URL) {
            // set to the URL in the location bar, just in case
            let canonical = window.location;
            let links = document.getElementsByTagName('link');

            for (let i = 0; i < links.length; i++) {
                if (links[i].getAttribute('rel') === 'canonical') {
                    canonical = links[i].getAttribute('href');
                }
            }

            this.OGINFO.URL = canonical;
        }

        return this;
    }

    /**
    * Facebook share
    *
    */
    facebookShare() {
        this.getOGData();
        const shareURL = `//www.facebook.com/sharer.php?u=${this.OGINFO.URL}`;
        openpopup(shareURL, 'FacebookShare', 420, 300);
    }

    /**
    * Twitter share
    *
    */
    twitterShare() {
        this.getOGData();
        const shareURL = `//twitter.com/share?url=${this.OGINFO.URL}`;
        openpopup(shareURL, 'TwitterShare', 320, 300);
    }
}
