var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

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
                expert programmers ready to apply their knowledge and skill to bring you success.<br />
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

  getInitialState: function () {
    return { opacity: 1 }
  },

  componentWillReceiveProps: function (nextProps) {
    if (this.props.content !== nextProps.content) {
      this.setState({ opacity: 0 })
    }
  },

  componentDidUpdate: function () {
    if (this.state.opacity !== 1) {
      setTimeout(() => {
        this.setState({ opacity: 1 })
      }, 200)
    }
  },

  render: function () {

    var style = {
      opacity: this.state.opacity,
      transition: this.state.opacity > 0 ? 'opacity 0.2s ease-in' : 'none'
    }

    return (
      <div className="container">
        <div className="row" style={style}>
          <ReactCSSTransitionGroup transitionName="fadein" transitionAppear={true} >
            {this.props.content}
          </ReactCSSTransitionGroup>
        </div>
      </div>
      );
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
        <MainContent content={this.state.activeContent} />
        <FooterMenu setActiveContent={this.setActiveContent} />
      </div>
      );
  }

});

ReactDOM.render(
  <App />,
  document.getElementById('content')
  );