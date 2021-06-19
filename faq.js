(()=>{var s=`<h1 id="frequently-asked-questions">Frequently Asked Questions</h1>
<p><strong>Q:</strong> What is this and why should I use it?:</p>
<p><strong>A:</strong> This is a complete redesign of the traditional password generator/storage system. Instead of relying on a hard drive to not to fail, or that backup you keep forgetting to make, Cloverleaf makes a password based on your master password and the application you want a password for. This generated password will be the same every time, no matter what device you&#39;re on. You can then copy this and paste it into the app you want to log into.</p>
<br/>

<p><strong>Q:</strong> How do I know you&#39;re not looking at my passwords?:</p>
<p><strong>A:</strong> When you type, your computer takes the app name and your master password and using them makes a new password. Nothing is ever sent across the internet, other than the code for the website itself. If you really want, you can <a href="https://github.com/cloverleaf/web/archive/refs/heads/master.zip">download the files</a> for the website, smash your router and run Cloverleaf offline (Not that I&#39;d recommend smashing your router.)</p>
<br/>

<p><a name="remake"><strong>Q:</strong> Why did you remake an existing product?:</a></p>
<p><strong>A:</strong> I&#39;ve openly acknowledged that Cloverleaf is based off the concept of &quot;<a href="https://masterpasswordapp.com/">Master Password</a>&quot; but why would I spend all this time re-making a working piece of software? The answer is simple: <em>I don&#39;t like how Master Password works.</em> It has many different offshoots that all look different. It takes 6 variables to make a password and 30 seconds to load (Yes, I timed it.). It makes everything harder than it should be. And that was my motivation to make Cloverleaf. I absolutely love the concept of secure passwords without storing them but hate the current solutions.</p>
<br/>

<p><strong>Q:</strong> What if I have multiple accounts on one service?:</p>
<p><strong>A:</strong> There isn&#39;t a system in place for this but there doesn&#39;t need to be since you can just type <code>ACCOUNTNAME PASSWORD</code> in the password field to get the password for that account.</p>
<br/>

<p><a name="cookies"><strong>Q:</strong> What are cookies and why do you use them?:</a></p>
<p><strong>A:</strong> A cookie is a small bit of information that a website stores on your computer so that when you come back to the site later, it can remember things from your previous visit. Cloverleaf uses these for remembering what theme you like and a few other things like that.</p>
<br/>

<p><strong>Q:</strong> What&#39;s the deal with the coloured underline?:</p>
<p><strong>A:</strong> That colour represents your password</p>
<br/>

<p><strong>Q:</strong> Why is &quot;preset usage&quot; stored?:</p>
<p><strong>A:</strong> All that means is that each time you use a preset, Cloverleaf makes a note that you&#39;ve used it. The only thing that&#39;s stored is the number of times you&#39;ve used each preset, so that autocomplete suggestions can be more taliored to each user. This data never leaves your device.</p>
<br/>

<p><strong>Q:</strong> What if I have a question that&#39;s not listed here?</p>
<p><strong>A:</strong> <a href="https://github.com/cloverleaf/web/issues/new?assignees=&amp;labels=Question&amp;template=question.md">Ask your question here</a></p>
`,a=`# Frequently Asked Questions\r
\r
**Q:** What is this and why should I use it?:\r
\r
**A:** This is a complete redesign of the traditional password generator/storage system. Instead of relying on a hard drive to not to fail, or that backup you keep forgetting to make, Cloverleaf makes a password based on your master password and the application you want a password for. This generated password will be the same every time, no matter what device you're on. You can then copy this and paste it into the app you want to log into.\r
\r
<br/>\r
\r
**Q:** How do I know you're not looking at my passwords?:\r
\r
**A:** When you type, your computer takes the app name and your master password and using them makes a new password. Nothing is ever sent across the internet, other than the code for the website itself. If you really want, you can [download the files](https://github.com/cloverleaf/web/archive/refs/heads/master.zip) for the website, smash your router and run Cloverleaf offline (Not that I'd recommend smashing your router.)\r
\r
<br/>\r
\r
<a name="remake">**Q:** Why did you remake an existing product?:</a>\r
\r
**A:** I've openly acknowledged that Cloverleaf is based off the concept of "[Master Password](https://masterpasswordapp.com/)" but why would I spend all this time re-making a working piece of software? The answer is simple: *I don't like how Master Password works.* It has many different offshoots that all look different. It takes 6 variables to make a password and 30 seconds to load (Yes, I timed it.). It makes everything harder than it should be. And that was my motivation to make Cloverleaf. I absolutely love the concept of secure passwords without storing them but hate the current solutions.\r
\r
<br/>\r
\r
**Q:** What if I have multiple accounts on one service?:\r
\r
**A:** There isn't a system in place for this but there doesn't need to be since you can just type \`ACCOUNTNAME PASSWORD\` in the password field to get the password for that account.\r
\r
<br/>\r
\r
<a name="cookies">**Q:** What are cookies and why do you use them?:</a>\r
\r
**A:** A cookie is a small bit of information that a website stores on your computer so that when you come back to the site later, it can remember things from your previous visit. Cloverleaf uses these for remembering what theme you like and a few other things like that.\r
\r
<br/>\r
\r
**Q:** What's the deal with the coloured underline?:\r
\r
**A:** That colour represents your password\r
\r
<br/>\r
\r
**Q:** Why is "preset usage" stored?:\r
\r
**A:** All that means is that each time you use a preset, Cloverleaf makes a note that you've used it. The only thing that's stored is the number of times you've used each preset, so that autocomplete suggestions can be more taliored to each user. This data never leaves your device.\r
\r
<br/>\r
\r
**Q:** What if I have a question that's not listed here?\r
\r
**A:** [Ask your question here](https://github.com/cloverleaf/web/issues/new?assignees=&labels=Question&template=question.md)\r
`,r="faq.md",t={html:s,raw:a,filename:r};var o=document.createElement("div");o.innerHTML=t.html;document.body.appendChild(o);})();
//# sourceMappingURL=faq.js.map
