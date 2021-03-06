import React, { Component } from "react";
// import { CSSTransition, transit } from "react-css-transition";

class SplineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [], //every object below is a single entry for its emotion
      axisX: {
        title: "Time (seconds)",
        minimum: "0"
      },

      axisY: {
        title: "Score",
        minimum: "0"
      },

    };
  }

  UpdateState = [
    {
      type: "line",
      markerType: "circle",
      visible: true,
      showInLegend: true,
      name: "joy",
      dataPoints: []
    },
    {
      type: "line",
      markerType: "circle",
      visible: true,
      showInLegend: true,
      name: "fear",
      dataPoints: []
    },
    {
      type: "line",
      markerType: "circle",
      visible: true,
      showInLegend: true,
      name: "sadness",
      dataPoints: []
    },
    {
      type: "line",
      markerType: "circle",
      visible: true,
      showInLegend: true,
      name: "surprise",
      dataPoints: []
    },
    {
      type: "line",
      markerType: "circle",
      visible: true,
      showInLegend: true,
      name: "anger",
      dataPoints: []
    },
    {
      type: "line",
      color: "orange",
      markerType: "cricle",
      scatterSize: [],
      visible: true,
      showInLegend: true,
      name: "disgust",
      dataPoints: []
    }
  ];

  componentDidUpdate() {
    const chart = new window.CanvasJS.Chart("chartContainer", {
      theme: "light3",
      animationEnabled: true,
      animationDuration: 2000,
      title: { text: "Emotions over time" },
      axisX: this.state.axisX,
      axisY: this.state.axisY,
      toolTip: {
        shared: "true"
      },
      interactivityEnabled: "true",
      zoomEnabled: true,
      legend: {
        cursor: "pointer",
        itemclick: function (e) {
            if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            } else {
                e.dataSeries.visible = true;
            }
            e.chart.render();
        }
      },
      data: this.UpdateState
    });
    this.PopulateGraph();
    chart.render();
  }

  PopulateGraph() {
    if(this.props.data.data)
    this.props.data.data.forEach(recording => {
      recording.reactions.forEach(array => {
        array.forEach(object => {
          object.people.forEach(nested => {
          var time = object.time;
            for (let emotion in nested.emotions) {
              for (let entry of this.UpdateState) {
                if (entry.name === emotion)
                  this.UpdateState[
                  this.UpdateState.indexOf(entry)
                  ].dataPoints.push({
                    x: time/1000,
                    y: nested.emotions[emotion]
                  }); //end of array.push method
                  // time = 0;
              } //end of state loop
              // }//end of if statement
            }
          });
        });//array.forEach
      });
      // }
    });
  }

  render() {
    return <div id="chartContainer"/>;
  }
}

export default SplineChart;