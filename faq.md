# Frequently Asked Questions

**Q:** What is this and why should I use it?:

**A:** This is a complete redesign of the traditional password generator/storage system. Instead of relying on a hard drive to not to fail, or that backup you keep forgetting to make, Cloverleaf makes a password based on your master password and the application you want a password for. This generated password will be the same every time, no matter what device you're on. You can then copy this and paste it into the app you want to log into.

<br/>

**Q:** How do I know you're not looking at my passwords?:

**A:** When you type, your computer takes the app name and your master password and using them makes a new password. Nothing is ever sent across the internet, other than the code for the website itself. If you really want, you can [download the files](https://github.com/cloverleaf/web) for the website, smash your router and run Cloverleaf offline (Not that I'd recommend smashing your router.)

<br/>

<a name="remake">**Q:** Why did you remake an existing product?:</a>

**A:** I've openly acknowledged that Cloverleaf is based off the concept of "[Master Password](https://masterpasswordapp.com/)" but why would I spend all this time re-making a working piece of software? The answer is simple: *I don't like how Master Password works.* It has many different offshoots that all look different. It takes 6 variables to make a password and 30 seconds to load (Yes, I timed it.). It makes everything harder than it should be. And that was my motivation to make Cloverleaf. I absolutely love the concept of secure passwords without storing them but hate the current solutions.

<br/>

**Q:** What if I have multiple accounts on one service?:

**A:** There isn't a system in place for this but there doesn't need to be since you can just type `ACCOUNTNAME PASSWORD` in the password field to get the password for that account.

<br/>

<a name="cookies">**Q:** What are cookies and why do you use them?:</a>

**A:** A cookie is a small bit of information that a website stores on your computer so that when you come back to the site later, it can remember things from your previous visit. Cloverleaf uses these for remembering what theme you like and a few other things like that.

<br/>

**Q:** What if I have a question that's not listed here?

**A:** [Ask your question here](https://github.com/cloverleaf/web/issues/new?assignees=&labels=Question&template=question.md&title=)

<title>Frequently Asked Questions - Cloverleaf</title>
<style
  type="text/css">
  @import url(https://fonts.googleapis.com/css?family=Open+Sans);

  body {
    color: #444;
    font-family: 'Open Sans', sans-serif;
    max-width: 75%;
    text-align: center;
    margin:auto;
    margin-top:2em;
    margin-bottom: 5em;
  }

  a[href],
  a[href]:visited {
    color: #3498db;
  }

  a[href]:hover,
  a[href]:focus,
  a[href]:active {
    color: #2980b9;
  }
  em{
    font-style: normal;
    background-color: #ffff87;
    box-shadow:3px 0 0 #ffff87, -3px 0 0 #ffff87;

  }

  a:target {
    text-decoration: underline;
    font-weight: bold;
  }

  code{
    background-color: #eee;
    box-shadow: 3px 0 0 #eee, -3px 0 0 #eee;
    border-radius: 3px;    
  }
</style>
