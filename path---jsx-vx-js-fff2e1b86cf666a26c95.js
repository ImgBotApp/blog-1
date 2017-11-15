webpackJsonp([0xbb90493450e7180],{"./node_modules/json-loader/index.js!./.cache/json/jsx-vx-js.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p>For some reason, our communities as a whole often times can get heavily opinionated over certain subjects. Sometimes, this can turn into huge internet flame wars, espcially it seems when there is relatively less quantifiable info to argue about, like tabs vs spaces or brackets on same line vs next. Sometimes though, it can lead to strong thoughtful debates where both sides have to do research, and you end up learning about both sides in the process.</p>\n<p>This week at work, a topic of this sort came up. We had generated a create-react-app and were in the process of getting everything setup. First, a team member got our initial project setup using the generator, made a couple example pages, etc. From there, a different engineer (from another team helping us out) started working on our first main component.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Engineer 1:\nCan we use .js extensions for our components?\n\nEngineer 2:\nBut it is a JSX component?\n\nmore comments...</code></pre>\n      </div>\n<p>So I\'m curious what the "correct answer" is in all this. Why one versus the other? So I start digging into github issues, pull requests, documentation and I think I can sum up the issue.</p>\n<p>It seems the answer is that it has changed over time. Originally, back in the day, when react was new and hadn\'t started completely dominating our Medium daily digest feeds, Jsx was recommended. It was a new thing, so it was given new file type. The file type assisted in browsers for syntax highlighting <a href="https://github.com/facebookincubator/create-react-app/issues/87#issuecomment-234627904">this comment on create-react-app\'s issue</a> goes into it a bit and also hints that this was more useful before bablel. Although I\'m kind of an infant in the javascript timeline, so I\'m not sure why, and can\'t find anything online about it.</p>\n<p>You may have heard of Airbnb, but did you also know they have a pretty decent footprint in open source technologies, especially around javascript areas? One thing in particular we utilize alot is their <a href="https://github.com/airbnb/javascript">style guide</a> which can be enforced programmatically through their presets of <a href="https://eslint.org/">eslint</a>. One particular one is a rule that enforces the use of jsx file extensions via a <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md">plugin</a>.</p>\n<p>But now, things seem to have changed a bit. Facebook (the creators and owners of react) seem to have gone the direction of using the JS extension. You can see this in a number of different ways.</p>\n<p>Create-react-app generates all js files\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/8fb5acdf5a1639486dcf7d6f23538312-5333d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; "\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 57.87781350482315%;position: relative; width: 100%; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABgklEQVQoz4WSS0/CQBSF+xt49zFtmZbQFlMeJixM3JHoRv+CS3fuFRB8BEL80cc51wyhBGFxMp3J9Jtzz73O7ewBT88vWG62+Nj9YL5a43W+xNf3BpvtTtbFciVarT9lf6y3xTtm94+4md3BybIc3bSPKIqhdQKdJEiMiqLAeDxGWZbodrtQKkQYnpZSCr7vwzNy8rxA3C/RbrfR6XTgeZ5cUIGPLMvMQ5Gc1ev1s2o0GiInjo2zfALX9QTIl/gqQb1eT9xa0Snvc6WBU3JYis7H8FUE1zixQK31XmmaCpyrFcEWzjs0IMDQZJdeTRHqvnHpVoCTyUR+5vmxGIMV/+FZs9n8AybFNaIkgx+ElZKn06kAL+VXq9X23wYYSclBpCvAIAiQ57kAW63WPvRLcsIwkqZ4gao0hSWwyxSzOezkWaBkoGLTEL+SIfMYjUYYDAbikPtLpUvJdGV1CKQrljwcDqWbnE1C/9Pe4XH3LJAQ5sexsCPDWbRjZGeTe+Zt5/AXlBpTWtLxmu4AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="create react app readme"\n        title=""\n        src="/static/8fb5acdf5a1639486dcf7d6f23538312-10273.png"\n        srcset="/static/8fb5acdf5a1639486dcf7d6f23538312-9b14a.png 163w,\n/static/8fb5acdf5a1639486dcf7d6f23538312-94962.png 325w,\n/static/8fb5acdf5a1639486dcf7d6f23538312-10273.png 650w,\n/static/8fb5acdf5a1639486dcf7d6f23538312-2fc6f.png 975w,\n/static/8fb5acdf5a1639486dcf7d6f23538312-a8a2c.png 1300w,\n/static/8fb5acdf5a1639486dcf7d6f23538312-173d2.png 1950w,\n/static/8fb5acdf5a1639486dcf7d6f23538312-5333d.png 2488w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n<a href="https://github.com/facebookincubator/create-react-app/#creating-an-app">https://github.com/facebookincubator/create-react-app/#creating-an-app</a></p>\n<p>React tutorials specify to use a js file\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/a33aee000d958cefc8d16c789881b866-b3c7e.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; "\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 58.03876852907639%;position: relative; width: 100%; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAACF0lEQVQoz5XRW08TQRgG4P0rKFCMlAL2gG5L6YFSBY8X/hDb2gheqBdCCWowMSZ6oTFR1Iith0CQIIddihfEa2qCdlsgEbux7bbdKcS+zm7p1hUvcJInM/N+ky8zu8z9x0/wPBbDRDSKpxMv8ezFJF7H3quib6YwPTP3X5iGw0fR0NiKQ02tOGLuhrGnHwbTcTQ2t6k6zXY0t5jQ0snCYLTAaLLCbHWgrd1G1zZ132QwaZhXkzEoHjx8hMDlIQTCVxEIDSIQvKIK0iw0eA3hGxGErw8jSGshmil5MDSk7i/RczWMLMtQvH03BQvbC2/fGdhYN9rpzapYdFgc6LA5VbWsXtdjsDfWEl8QGbuLO+P3MDo2juHR21WRmlvVmWYje5Ts5oie1pAQAkFIIZkU1DklrFMJpNNfkUoJ2EivI6nUqcQ3AWtUenML29s/dLSGlUoFkiShoChIKErfIYkbkAs5FAs/QUoZ5Gktm5ewmZWwlc3jVwX7BvPnhhAZhH5P5bZEzoNIOeySMnbLOewQETvlEkpyERKhZIJ/Da1hJiOC4+Lg+Dj45RV1za98whK3DG5pHosL0+D5RZovIM7P05zH6urnfbSGH2Y/otvph8vTD7fvNJyuk2DdPljtblhOuGDuUvToHKN//W9aw5nZOfT6zsLnP4eBCxfRN3AeTu8pOLx+ODx+dNk9B1J/siiqz9OL1/EH8xvcGazPEgkw4gAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="react tutorial"\n        title=""\n        src="/static/a33aee000d958cefc8d16c789881b866-10273.png"\n        srcset="/static/a33aee000d958cefc8d16c789881b866-9b14a.png 163w,\n/static/a33aee000d958cefc8d16c789881b866-94962.png 325w,\n/static/a33aee000d958cefc8d16c789881b866-10273.png 650w,\n/static/a33aee000d958cefc8d16c789881b866-b3c7e.png 877w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n<a href="https://reactjs.org/tutorial/tutorial.html">https://reactjs.org/tutorial/tutorial.html</a></p>\n<p>The create react app even leaves a note in your webpack config if you eject, pointing to an issue about why they don\'t recommend using the jsx file extension.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token operator">...</span>\n<span class="token comment" spellcheck="true">// These are the reasonable defaults supported by the Node ecosystem.</span>\n<span class="token comment" spellcheck="true">// We also include JSX as a common component filename extension to support</span>\n<span class="token comment" spellcheck="true">// some tools, although we do not recommend using it, see:</span>\n<span class="token comment" spellcheck="true">// https://github.com/facebookincubator/create-react-app/issues/290</span>\n<span class="token comment" spellcheck="true">// `web` extension prefixes have been added for better support</span>\n<span class="token comment" spellcheck="true">// for React Native Web.</span>\nextensions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'.web.js\'</span><span class="token punctuation">,</span> <span class="token string">\'.js\'</span><span class="token punctuation">,</span> <span class="token string">\'.json\'</span><span class="token punctuation">,</span> <span class="token string">\'.web.jsx\'</span><span class="token punctuation">,</span> <span class="token string">\'.jsx\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token operator">...</span>\n</code></pre>\n      </div>\n<p><a href="https://github.com/facebookincubator/create-react-app/blob/2e82ebb3371731a5c4e346f310848ddb23fd0976/packages/react-scripts/config/webpack.config.dev.js#L89">https://github.com/facebookincubator/create-react-app/blob/2e82ebb3371731a5c4e346f310848ddb23fd0976/packages/react-scripts/config/webpack.config.dev.js#L89</a></p>\n<p>So what did we decide on? Well at the end of the day, our company\'s javascript ecosystem as a whole had already in the past decided to utilize a wrapper around the airbnb eslint plugin. So, we chose to go with that. Being a snowflake is usually not good, we would rather align with other teams. This is afterall what a linter is for right? To squash these little arguments. Without this linter, I would probably be arguing that we should use the js extension. Facebook is the maintainer of react after all. They may build tooling or projects that only work with js out of the box in the future (probably not any time soon because jsx is so prevalent, but you get the idea).</p>',timeToRead:3,excerpt:"For some reason, our communities as a whole often times can get heavily opinionated over certain subjects. Sometimes, this can turn into...",frontmatter:{title:"Jsx vs Js",date:"10/17/2017",category:"frontend",tags:["react"]},fields:{slug:"jsx-vx-js"}}},pathContext:{slug:"jsx-vx-js"}}}});
//# sourceMappingURL=path---jsx-vx-js-fff2e1b86cf666a26c95.js.map