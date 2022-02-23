"Interface Segregation Principle: A client should never be forced to implement an interface that it doesn’t use or clients shouldn’t be forced to depend on methods they do not use."

// This code below breaks the rule of ISP as the Ostrich doesn't fly nor the Kingfisher generlly runs.

interface IBird { 
    fly();
    run();
}

class Kingfisher implements IBird { 
    fly() { }

    run() { }
}

class Ostrich implements IBird { 
    fly() { }

    run() { }
}

// So we should have segregated interface for Ostrich and Kingfisher by which they shouldn’t be forced to depend on methods they do not use.

interface IKinshfisherBird { 
    fly();
}

interface IOstrichBird { 
    run();
}

class Kingfisher implements IKinshfisherBird { 
    fly() { }
}

class Ostrich implements IOstrichBird {
    run() { }
}



