var FooterMenu = React.createClass({
  onClick: function (type) {
    var content;

    switch (type) {
      case 'about':
      content = <p>Parenthesis Tech is a leading software development company providing technology
                solutions for organizations and individuals across the globe. We provide a
                broad scope of services in areas of Web Development, Hybrid Mobile Apps, Desktop
                Software and Server/Cloud-Based Applications & Management, using modern
                straightforward technologies. The Parenthesis team prides itself on having unparalleled
                expert programmers ready to apply their knowledge and skill to bring you success.
                Quality, communication and transparency are our goals to always deliver the best results.<br />
                We don't want it perfect, we want it awesome.</p>;
      break;
      case 'tech-stack':
      content = <p>PHP - HTML5 - CSS3 - JavaScript - jQuery - AngularJS - Symfony - ReactJS -
                Laravel - Linux - NodeJS - Drupal - WordPress - MySQL - APIs - Ionic - PhoneGap -
                MongoDB - DynamoDB - Amazon AWS - Java - Python</p>;
      break;
      default:
      throw new Error('Unimplemented type');
    }

    this.props.setActiveContent(content);
  },
  render: function () {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ul className="text-muted list-inline main-menu">
                <li onClick={this.onClick.bind(this, 'about')}>(about)</li>
                <li onClick={this.onClick.bind(this, 'tech-stack')}>(tech stack)</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="text-muted list-inline social-links">
                <li>
                  <a href="mailto:hi@parenthesis.io"><span className="icon icon-email"></span></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/parenthesis-tech"><span className="icon icon-linkedin"></span></a>
                </li>
                <li>
                  <a href="https://twitter.com/ParenthesisTech"><span className="icon icon-twitter"></span></a>
                </li>
                <li>
                  <a href="https://github.com/parenthesislab"><span className="icon icon-github"></span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      );
  }
});

var MainContent = React.createClass({
  contextTypes: {
    activeContent: React.PropTypes.any
  },
  render: function () {
    return (
      <div className="container">
        <div className="row">{this.context.activeContent}</div>
      </div>
      );
  }
});

var MainContentWrapper = React.createClass({
  render: function () {
    return <MainContent />;
  }
});

var App = React.createClass({

  getInitialState: function () {
    return {
      activeContent: <h1>(parenthesis)</h1>
    }
  },

  childContextTypes: {
    activeContent: React.PropTypes.any
  },

  getChildContext: function () {
    return {
      activeContent: this.state.activeContent
    };
  },

  setActiveContent: function (content) {
    this.setState({activeContent: content});
    setTimeout(function(){
      this.replaceState(this.getInitialState());
    }.bind(this),60000);
  },

  render: function () {
    return (
      <div>
        <MainContentWrapper />
        <FooterMenu setActiveContent={this.setActiveContent} />
      </div>
      );
  }

});

ReactDOM.render(
  <App />,
  document.getElementById('content')
  );