 const parent = [React.createElement("div",{id:"parent-1"},[React.createElement("div",{id:"child-1"},"I am first Child content") , React.createElement("div",{id:"child-2"},"I am second Child content")]),React.createElement("div",{id:"parent-2"},[React.createElement("div",{id:"child-1"},"I am first Child content") , React.createElement("div",{id:"child-2"},"I am second Child content")])];
 
//  const heading = React.createElement("h1",{id:"heading",xys:"abc"},"Hello World from React!");

 console.log(parent);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);   