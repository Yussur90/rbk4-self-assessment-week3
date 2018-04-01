angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },


  template: `
    <div>
      <fish-table-row 
      ng-reapeat="fish in &ctrl.fishes" fish={fish}>
           {{fish}}
      </fish-table-row>
     
    </div>`


});