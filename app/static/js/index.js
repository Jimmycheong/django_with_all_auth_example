class Index extends React.Component {

    constructor(){
        super()
        this.state = {}

        this.proceedToLogout = this.proceedToLogout.bind(this)
    }

    componentWillMount(){
      var this_ = this
        // $.get('/api/k2n/all', function (data, status) {
        //   this_.setState({sentences: data['sentences']})
        // })
    }



    proceedToLogout(event){
      event.preventDefault();

      // Required for Django for CSRF protection
      var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();
      console.log(csrftoken)
      var data = {}
      $.post( "/accounts/logout/", function( data ) {
        console.log("SUCCESSFULL LOGOUT")
      });

      $.ajax({
        url: '/accounts/logout/',
        headers: {
            'X-CSRFToken':csrftoken
        },
        method: 'POST',
        success: function(data){
          console.log('succes: '+data);
        }
      });
    }

    render(){
      return(
        <div>
          <div>React component</div>
          <button onClick={this.proceedToLogout}>Logout</button>
        </div>
      )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('indexComponent')
)
