class IntegerSet {
  // NOTE: cada objeto da classe pode armazenar interior [0, MAX]

  constructor(valueMax) {
    this.valueMax = valueMax;
    this.set = new Array(maxValue + 1).fill(false);
  }

  insertetItens(item) {
    this.set[item] = true;
  }

  removeItens(item) {
    this.set[item] = false;
  }

  unionItens(item) {
    const newSet = new IntegerSet(this.maxValue);
    for (let i = 0; i <= this.maxValue; i++) {
      newSet.set[i] = this.set[i] || item.set[i];
    }
    return newSet;
  }

  intersectionItens(item) {
    const newSet = new IntegerSet(this.maxValue);
    for (let i = 0; i < this.maxValue; i++) {
      newSet.set[i] = this.set[i] && item.set[i];
    }
  }

  differenceItens(item) {
    const newSet = new IntegerSet(this.maxValue);
    for (let i = 0; i <= this.maxValue; i++) {
      newSet.set[i] = this.set[i] && !item.set[i];
    }
    return newSet;
  }

  convertToString() {
    const elements = [];
    for (let i = 0; i <= this.maxValue; i++) {
      if (this.set[i]) {
        elements.push(i);
      }
    }
    return `{ ${elements.join(", ")} }`;
  }
}

// Função para testar a classe IntegerSet
function testIntegerSet() {
  const set1 = new IntegerSet(10);
  const set2 = new IntegerSet(10);

  set1.insert(1);
  set1.insert(3);
  set1.insert(5);

  set2.insert(3);
  set2.insert(4);
  set2.insert(5);
  set2.insert(7);

  console.log("Set1:", set1.toString());
  console.log("Set2:", set2.toString());

  const unionSet = set1.union(set2);
  console.log("Union of Set1 and Set2:", unionSet.toString());

  const intersectionSet = set1.intersection(set2);
  console.log("Intersection of Set1 and Set2:", intersectionSet.toString());

  const differenceSet = set1.difference(set2);
  console.log("Difference of Set1 and Set2:", differenceSet.toString());

  set1.remove(3);
  console.log("Set1 after removing 3:", set1.toString());
}

// Executa a função de teste
testIntegerSet();
