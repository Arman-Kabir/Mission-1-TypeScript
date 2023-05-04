// Arrow Function

const createArray = (param:string ): string[] => {
  return [param];
};

const createArray1 = <X,Y>(param1: X,param2:Y): [X,Y] => {
  return [param];
};

const result1 = createArray1<string>('Bangladesh');
const result2 = createArray1<boolean>(false);

type Name = {name:string};


const result3 = createArray1<Name>({name:"Bangladesh"});
