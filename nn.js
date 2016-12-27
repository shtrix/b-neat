/**
 * Created by steel on 27.12.16.
 */
var R = require('./ml/recurrent.js');
var N = require('./ml/neat.js');
var DataSet = require('./dataset.js');
var hdf5 = require('hdf5').hdf5;
var h5ds = require('hdf5').h5ds;
var h5pt = require('hdf5').h5pt;
var h5lt = require('hdf5').h5lt;
var h5tb = require('hdf5').h5tb;
var h5tb = require('hdf5').h;
const globs         = require('./lib/globals.js');
const Access        = globs.Access;
const CreationOrder = globs.CreationOrder;
const HLType        = globs.HLType;

var tmp = ''
var tmp2 = ''
var fil = new hdf5.File('ds.hdf5', globs.Access.ACC_RDWR)
var groupFactors=fil.openGroup('dataset')
var factorNames = groupFactors.getMemberNamesByCreationOrder();
for (var factorIndex = 0; factorIndex < factorNames.length; factorIndex++)
{
  tmp += factorNames[factorIndex]+'\n';
  // tmp2 = factorNames[factorIndex].getMemberNames()
  // var factor = h5lt.readDataset(groupFactors.id, factorNames[factorIndex]);
}

for (var factorIndex = 0; factorIndex < factorNames.length; factorIndex++)
{

  tmp += factorNames.length+'\n';
  tmp += factorNames.length+'\n';
  tmp += factorNames[factorIndex]+'\n';
  tmp += factorNames[factorIndex].length+'\n\n';
  var title = factorNames[factorIndex];
  try{
    // var factor = h5lt.readDataset(groupFactors.id, title);
    var factor2 = h5lt.readDataset(groupFactors.id, factorNames[factorIndex]);

} catch (e) {
  console.log(e)
}
}


var fil_tmp = new hdf5.File('ds_tmp.hdf5', globs.Access.ACC_TRUNC)
var grp=fil_tmp.createGroup('Temporary')
var buf = new Float64Array(4)
var c1 = new Float64Array(40036)
c1.name = 'debt2balance'
var c2 = new Float64Array(40036)
c2.name = 'piFactor'
var c3 = new Float64Array(40036)
c3.name = 'profit2balance'
var c4 = new Float64Array(40036)
c4.name = 'percents'
buf[0] = c1
buf[1] = c2
buf[2] = c3
buf[3] = c4
h5lt.makeDataset(grp.id, 'Temporary', buf)
var readBuffer1= h5lt.readDataset(grp1.id, 'dataset')
var readBuffer= h5lt.readDataset(grp.id, 'Temporary')
console.dir(readBuffer)




// var r = file.getDatasetType();
var r2 = file.getChildType('dataset');
var grp  = file.openGroup('dataset');
var r3 = grp.getChildType('axis0');
var r4 = grp.getChildType('axis1');
var r5 = grp.getChildType('block0_values');
var r6 = grp.getChildType('block0_items');
grp.getByteOrder();
var mnames = grp.getMemberNames();
// file = new hdf5.File('./roothaan.h5', Access.ACC_RDWR);
// group=file.openGroup('pmcservices/Quotes');
var array=h5lt.readDataset(grp.id, 'axis0');
console.dir(array.length);



var buffer=new Float64Array(5);
// buffer[0]=1.0;
// buffer[1]=2.0;
// buffer[2]=3.0;
// buffer[3]=4.0;
// buffer[4]=5.0;
//
h5lt.makeDataset(grp.id, 'dataset', buffer);

var grpHdrz    = grp.getMemberNames("block0_items");
var grpHdrz2    = grp.getDatasetAttributes("block0_items");
attrText = "";
// var file = new hdf5.File('/tmp/foo.h5', Access.ACC_TRUNC);

var group1=file.openGroup('dataset');

// var group2=file.openGroup('dataset');
group2.open('dataset', file)
// var group3=file.openGroup('dataset/axis1');
// group3.open('dataset/axis0', file)
// var group4=file.openGroup('axis1');
// group4.open('dataset/axis0', file)
// var group5=file.openGroup('block0items');
// group5.open('dataset/axis0', file)
// var buffer=new Float64Array(5);
var ds=new Array(150000);
var buffer=new Float64Array(5);
buffer[0]=1.0;
buffer[1]=2.0;
buffer[2]=3.0;
buffer[3]=4.0;
buffer[4]=5.0;
//
h5lt.makeDataset(group2.id, 'block0items', buffer);
ds=h5lt.readDataset(group2.id, 'dataset/block0items');



const group=file.openGroup('dataset')
group.open('dataset', file)
// var res = h5lt.readDatasetAsBuffer(group.id, 'block0items', ds);
var ds = h5lt.readDataset(group.id, 'headers');
const headers = group.openGroup('block0items')
const headers2 = group.openGroup('block1items')
const col1 = group.openGroup('axis0')
const col2 = group.openGroup('axis1')


const qty0 = col1.getNumObjs()
// const col_names = headers.getMemberNames()
const colAttrsQty = headers.getNumAttrs()
const qty1 = group.getNumObjs()
const qty2 = headers.getNumObjs()
// const columns = headers.getMemberNames()
const columns2 = headers.getNumAttrs()

const a1 = group.getNumAttrs()
// const a2 = group.getMemberNames()
const a3 = group.getMemberNamesByCreationOrder()

const a4 = group.getChildType('block0_values')
const a5 = group.getMemberNames('block0_values')
const a6 = group.getNumAttrs('block0_values')
const a7 = group.getNumObjs('block0_values')
const b1 = group.getNumObjs('block0_values')
group.open('dataset', file)
ds.rank=2;
ds.ass=999;
ds.rows=150000;
ds.columns=qty1;
// h5lt.makeDataset(group.id, 'DS_ONE', ds);
// var ds_one=h5lt.readDataset(group.id, 'DS_ONE');
var ds_one=h5lt.readDatasetAsBuffer(group.id, 'dataset');

const ID = group.id;
// var id = group.id;
var tbl=new Array(4);
var fieldArray0=new Array(21);
var fieldArray1=new Array(21);
var fieldArray2=new Array(21);
var fieldArray3=new Array(21);
fieldArray0.name="debt2balance";
fieldArray1.name="piFactor";
fieldArray2.name="profit2balance";
fieldArray3.name="percents";
tbl[0]=fieldArray0;
tbl[1]=fieldArray1;
tbl[2]=fieldArray2;
tbl[3]=fieldArray3;
h5tb.makeTable(ID, 'dataset', tbl);
var rT=h5tb.readTable(ID, "dataset");


ds2 = Array()
const ds1 = h5lt.readDataset(group.id, 'dataset', ds2)

const dimensions=group.getMemberNamesByCreationOrder();
// group.getDatasetType("dataset").should.equal(HLType.HL_TYPE_PACKET_TABLE);
// var group = file.openGroup('dataset');
try {
  // const table = h5pt.readTable(group.id, "dataset");
  while(table.next()){
    console.dir(table.record);
    console.log('     D2B: ' + table.debt2balance);
    console.log('     piF: ' + table.piFactor);
    console.log('     P2B: ' + table.profit2Balance);
    console.log('      % : ' + table.percents);

  // zzz = h5ds.iterateScale(group.id, 'Data', 1, function(r, status) {
  //   console.dir("status: "+status);
  };
} catch (e) {
  console.log(e)
}
table.close();
group.close();
// DataSet.generateRandomData(3);

var printPerformanceMetrics = function(genome, detailMode_) {
  // calculates the accuracy for genome to predict both training and testing datasets, and prints the results
  var detailMode = false; // if true, dumps out every single datapoint and prediction.
  if (typeof detailMode_ !== 'undefined') detailMode = detailMode_;

  // helper function to use recurrent.js to calculate predictions
  function buildPredictionList(pList, thedata, thelabel, g, quantisation_) {
    // builds a list of predictions (pList), given groundtruth data, label, genome.
    // if quantisation is true, it rounds the prediction list to either 0 or 1
    "use strict";
    var i, n, y;
    var G, output;
    var acc = 0;
    var quantisation = typeof quantisation_ === 'undefined'? false : quantisation_;
    n=pList.length;
    g.setupModel(n);
    g.setInput(thedata);
    G = new R.Graph(false); // no backprop
    g.forward(G);
    output = g.getOutput();
    output[0] = G.sigmoid(output[0]);
    for (i=0;i<n;i++) {
      y = output[0].w[i]; // prediction (not to be confused w/ coordinate)
      acc += Math.round(y) === thelabel.get(i, 0)? 1 : 0;
      if (quantisation === true) {
        pList[i] = (y > 0.5)? 1.0: 0.0;
      } else {
        pList[i] = y;
      }
    }
    acc /= n;
    return acc;
  }

  function printDetail(pList, thedata, thelabel) {
    var i, n=pList.length;
    console.log("x0\tx1\tlabel\tpredict");
    for (i=0;i<n;i++) {
      console.log(thedata.get(i, 0).toPrecision(2)+'\t'+thedata.get(i, 1).toPrecision(2)+'\t'+thelabel.get(i, 0)+'\t'+pList[i].toPrecision(2));
    }
  }

  var predictionTrainList = R.zeros(DataSet.getTrainLength());
  var predictionTestList = R.zeros(DataSet.getTestLength());

  trainAccuracy = buildPredictionList(predictionTrainList, DataSet.getTrainData(), DataSet.getTrainLabel(), genome);
  testAccuracy = buildPredictionList(predictionTestList, DataSet.getTestData(), DataSet.getTestLabel(), genome);

  console.log("gen: "+N.getNumGeneration()+", fitness: "+genome.fitness.toPrecision(3)+", train accuracy: "+trainAccuracy.toPrecision(3)+", test accuracy: "+testAccuracy.toPrecision(3)+", nodes: "+genome.getNodesInUse().length+", connections: "+genome.connections.length);

  if (detailMode) {
    console.log("train set breakdown:");
    printDetail(predictionTrainList, DataSet.getTrainData(), DataSet.getTrainLabel());
    console.log("test set breakdown:");
    printDetail(predictionTestList, DataSet.getTestData(), DataSet.getTestLabel());
  }

};

var fitnessFunc = function(genome, backprop_mode, nCycle) {
  var fitness = 0.0;
  // write some code to calculate the fitness
  // backprop here as well if backprop_mode is set to true
  fitness = R.randi(0, 4);
  return fitness;
};

var backprop = function(trainer, nCycle) {
  var f = function(g) {
    return fitnessFunc(g, true, nCycle);
  };
  trainer.applyFitnessFunc(f); // this will be explained later.
};

N.init({nInput: 2, nOutput: 1, // 2 inputs (x, y) coordinate, one output (class)
  initConfig: "all", // initially, each input is connected to each output when "all" is used
  activations : "default", // [SIGMOID, TANH, RELU, GAUSSIAN, SIN, ABS, MULT, SQUARE, ADD] for "default"
});

var trainer = new N.NEATTrainer({
  new_node_rate : 0.2,
  new_connection_rate : 0.5,
  num_populations: 5,
  sub_population_size : 20,
  init_weight_magnitude : 0.25,
  mutation_rate : 0.9,
  mutation_size : 0.005,
  extinction_rate : 0.5,
});

trainer.applyFitnessFunc(fitnessFunc); // by default, fitnessFunc doesn't perform backprop
var genome = trainer.getBestGenome(); // this line will extract the most capable genome from the populations

for (var i = 0; i < 10; i++) { // evolve and backprop 10 times
  printPerformanceMetrics(genome); // print out the performance metrics
  trainer.evolve(); // evolve the entire population.  new nodes, connections, mutations, crossovers.
  backprop(trainer, 600);
  genome = trainer.getBestGenome();
}
printPerformanceMetrics(genome, true); // print out the final performance metrics with more details
var data_string = genome.toJSON() // dump the genome to json format
console.log(data_string);

// another project in another file:
var genome = new N.Genome();
genome.fromJSON(data_string);

