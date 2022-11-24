import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // On met à jour l’état afin que le prochain rendu affiche l’UI de remplacement.
     
        return { 
            hasError: true

        }; 
    }

    // componentDidCatch(error, info){        
    //     logErrorToMyService(error, info);
    // }
  
    render() {
      
      if (this.state.hasError) {
        // Vous pouvez afficher ici n’importe quelle UI de secours
        return (
            <div className="col bg-danger">
              <p style={{color:'#ffffff'}}>Oups, un probleme est survenu.</p>
            </div>
          )
      }
  
      return this.props.children;
    }
  }
  
  export default ErrorBoundary;