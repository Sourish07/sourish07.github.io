---
layout: post
cspost: yes
title:  "Neural Networks"
subheader: "Examining the building blocks of modern-day deep learning"
date:   "2022-07-22"
category: tutorials
---

Neural Networks are the foundation of all things Deep Learning so it’s pretty natural to be wondering how exactly they work. While they may seem like a black box to most, we find that the box isn’t actually that deep upon opening. With some simple, intuitive diagrams, let’s examine how these fascinating mathematical models learn to play video games, classify animals, and drive cars.

The piece that all neural networks are built on is the neuron. It takes in some inputs and yields an output, very similar to how the neurons in our brain work.

![Network with Activation Function](/blogAssets/images/nn/neuron_act_func.svg)

Think about each circle as a neuron and each line as a connection between the input and the output. In a computer, each circle and line are simply represented by a number. The gray circle is considered a bias term, whose value is always 1. However, this doesn’t mean the line associated with it is too.

The way the output is calculated is by taking a weighted sum of all of the inputs and then passing the result into the activation function; The lines are considered the weights. For now, let's assume the activation function is the sign function; It outputs 1 if the input is positive and -1 if it's not.

![Neuron](/blogAssets/images/nn/WeightedSum.svg)

It is through simple addition and multiplication that allows us to calculate the output for each neuron.

Below is a diagram of a fully connected neural network. It's simply a bunch of neuron arranged together in layers, with the dotted circles representing the bias terms.

![Network](/blogAssets/images/nn/full_network_non_tech.svg)

We have four neurons in the input layer (red), two neurons in the hidden layer (blue), and four neurons in the output layer (yellow). The number of neurons per layer is dependent on the task at hand, and may require tuning by you, the computer scientist. Each layer, besides the output layer, also has its own bias unit.

The input numbers will be given by whatever dataset we're using, but the values of each neuron in subsequent layers is the weighted sum of all the neurons in the previous layer, as mentioned above. The process of training a neural network is mathematically calculates out what values these weights should be.

At a fundamental level, a neural network just performs a sequence of multiplications and additions.

After calculating the weighted sum for each neuron in a layer, we pass the sum through the activation function; These aren't represented in the network above. The activation function’s task is to constrain the neuron's output within a specific range to prevent certain neurons from significantly overpowering other neurons. They also introduce non-linearity to the network, which is important for complex tasks. Without activation functions, a neural network would just condense to an everyday linear regression. All neurons in a layer have the same activation function, but can vary between layers.

We explore activation functions more in-depth in the technical section of this post.

The value of the first blue neuron in the hidden layer is the sum of each of the four neurons in the input layer times the corresponding weight connecting each red neuron to the blue neuron, plus the weight represented by the dotted line between the red bias term and the blue neuron passed into the activation function.

![Network](/blogAssets/images/nn/full_network_non_tech_gray.svg)

The same process goes for the other neuron in the hidden layer and the rest of ones in the output layer. We do not calculate anything for the bias neurons; They're always one.

For our network to be useful, we need some data. Let’s say we’re tackling the hand-written digit classification task (the "Hello World" of neural nets) using the MNIST dataset. Inserted below are 64 sample inputs from the dataset, each an image of a hand-written digit.

![MNIST Digits](/blogAssets/images/nn/many_digits.svg)

The way each digit is represented in the computer is by a 28x28 grid of numbers. Black pixels are given a value of 0, while white ones are given a value of 1. Any number in between is a relative shade of gray.

<img src="/blogAssets/images/nn/7_2.svg" style="max-height: 1000px">

We take each row of the image and stack it into a giant list of 784 (28 times 28) numbers; This will be the input to our neural network. For this case the input layer would need to have 784 neurons, one for each input. The output layer would need to have 10 neurons, one for each digit. We can choose to have however many hidden layers we'd like, and however many neurons in each.

We then multiply through the network until we have the 10 values in our output layer, known as the forward pass. The neuron with the highest value is our “prediction.” The first neuron represents the number 0. So, if the 8th neuron is the highest value, then the network’s prediction is the digit 7. 

While the general mechanics of a neural network hopefully seem much less complicated, I would expect that your next question is: How do we train these things? How does the network know what the values of the weights need to be in order to make accurate predictions?

Saving the calculus for the technical section, let’s examine the backpropagation algorithm. As mentioned earlier, each data point has an associated label, 0 through 9. We convert each numeric value into a vector of nine zeroes, and a one in the appropriate position indicated by the original label. These are called "one-hot encoded" vectors. Again, the first index represents 0.

$$
0=\begin{bmatrix}
1\\
0\\
0\\
0\\
0\\
0\\
0\\
0\\
0\\
0
\end{bmatrix}

\hspace{40pt}

7=\begin{bmatrix}
0\\
0\\
0\\
0\\
0\\
0\\
0\\
1\\
0\\
0
\end{bmatrix}
$$

At the starting, all of the weights in the network are initialized randomly, meaning the predictions won’t be accurate at all. After we forward propagate through the network, we have 10 numbers in our output layer, all of them pretty close to being useless.

We then compare the output layer to the vector created from the data label and subtract them to get an error vector. It essentially tells the network how incorrect each neuron in the output layer was. Using this error, we then calculate (by using gradient descent) how much to change each weight by for the output to be a little bit more accurate. We then move to the previous layer, again calculating how inaccurate the neurons were and then tweaking the network parameters.

After we repeat this for each data point, we’ll have completed one epoch of training. Most tasks require multiple epochs in order to yield a respectable accuracy.

We can track if our neural network is actually learning by using a “cost function.” It is a function that takes in our predicted values and the actual values for our entire dataset and returns a value indicating how “incorrect” our predictions are relative to the ground truth. The lower the value, the better.

It's through this process of passing a data point forward, comparing it with the ground truth, calculating the error, backpropagating the error through the network in reverse, and updating the weights that the weights will eventually start yielding accurate predictions. It's the fundamental backbone to all of the systems today that use a neural network(s) under the hood.

In the technical section, we’ll see how the back propagation algorithm minimizes this function to obtain the weights that maximize our accuracy. There we'll dive into the linear algebra and calculus for neural networks.

split

With the help of some linear algebra and calculus, we can build upon our intuition of how neural networks work by understanding the math behind it.

## Data
<!--- Maybe move this data section to the non-technical? -->
An ML model doesn't provide any value if it's unable to properly learn the trends in the data it's trained on. Models are commonly plagued with two issues, overfitting and underfitting.

![Fitting](/blogAssets/images/nn/fitting1.svg)

Let's say we train our model on the above dataset. The first line is doing a terrible job at it; Its predictions across the whole dataset are very incorrect. The model is unable to account for the quadratic nature of the data.

The middle model is doing a very reasonable job, while the last model is doing an incredible job. We call this overfitting. The overfitting model doesn't just capture the quadratic nature, but additionally, captures some of the noise present as well.

We might be inclined to lean towards the final model, but we also need to account for the fact that our model might not generalize to new data points very well, which is the entire goal of training a model: To be robust to the infinitely possible data points the real world might throw at it.

![Fitting2](/blogAssets/images/nn/fitting2.svg)

The black star represents a new data point the model hasn't seen before. The x-value for it is 5 and the true y-value is 25. It was sampled from the same random process that generated the rest of the data points.

![Fitting3](/blogAssets/images/nn/fitting3.svg)

The orange dot represents the model's prediction for when x is equal to 5. The first model is wrong, but only by about 15. The second model is off by a much smaller amount, while the overfitting model's prediction is off by over 250!

If you look closely at the graph of the third model above, you'll see that it reaches a local maximum when x is 4 and starts to decline as x continues to increase. It correctly predicts the data points it has already seen, but cannot predict the new point correctly, even though it's a point that fits the trend of the dataset.

Think about a student that memorizes the study sheet for an upcoming test rendering them unable to answer questions that are conceptually similar, but slightly different from the questions they've seen previously. A more ideal approach might be to not just memorize the problems and their answers on the study sheet, but rather to understand the concepts required to solve them.

The overfitting model is doing exactly what the first student did, while the second model is equivalent to the student that doesn't memorize, but rather seeks to learn the underlying concepts.

*Extending the analogy to the first model: One could say it's like a student that didn't bother studying at all!*

To avoid the problem of overfitting, the dataset is split into two batches, a train dataset and a test dataset. Some common splits are 70-30 or 80-20. We train our model on the train dataset and check if the accuracy of our test dataset improves. If the train accuracy is high, but the test accuracy is low, we know our model is overfitting. If both accuracies are low, we're underfitting. If both are high, we're golden.

## Overview of the Full Algorithm

Let's first get a brief outline of what all of the steps in the training process are. Keep in mind where the train data is used vs the test data.

1. Randomly initialize the weights of the neural network
2. Shuffle all of the training data
3. Perform a forward pass of the first training example
4. Perform the backpropagation algorithm
    - a. Starting at the last layer, calculate the error term for the weights
    - b. Proceed to calculate the error term for all hidden layers (again, going from right to left)
    - c. Update the weights with gradient descent
5. Repeat steps 3 and 4 until you've iterated through the entire train dataset
6. Pass through all test data and measure test accuracy to gauge if network is learning
7. Repeat steps 2 through 6 for each epoch of training

The testing phase is when we give the trained network the test data, data it hasn't seen before, to gauge how well it can generalize to new data. It performs a forward pass on each test example and compares the network's prediction to the ground truth for that test example.

After having gone through the entire test dataset, it calculates its accuracy. We want this metric to increase with each epoch to ensure our model isn't overfitting.

*The weights of the network are not tuned when the test data is passed in! This means that the model isn't learning from the test data so it'll be unable to "memorize" any of the test examples.*

## Linear Algebra

Linear Algebra provides us with some minimalist notation and extra tools to properly utilize vectors and matrices. Take a look at the diagram of a neuron with two inputs again.

![Neuron](/blogAssets/images/nn/NNAdvancedNeuron.svg)

The output of the neuron is the weighted sum of the inputs plus the bias term, passed into the activation function. Let's call the activation function $$f(x)$$ for now.
<!--- Center the following: -->
$$\text{output}=f(w_0 + w_1x_1 + w_2x_2)$$

This notation will become quite cumbersome as the number of inputs and weights increases. Let's rewrite our inputs and weights as vectors.

$$
x =
\begin{bmatrix}
x_1\\
x_2
\end{bmatrix}
\hspace{40pt}
w=
\begin{bmatrix}
w_1\\
w_2
\end{bmatrix}
$$

If we take the dot product of these two vectors, we get the sum of the element-wise products. We set $$b$$ to equal $$w_0$$ because it's the bias.

$$
\begin{align*}
x \cdot w &= w_1x_1 + w_2x_2\\
b &= w_0\\
output &= f(x \cdot w + b)\\
\end{align*}
$$

The weighted sum can now be written with just three variables because of the convenience of the dot product. The beauty here is that our notation doesn't change as the number of inputs increases. This operation&mdash;to multiply by the weights and add the bias&mdash;is called a linear transformation.

Let's move on to a neural network.

![Network](/blogAssets/images/nn/FullNetwork.svg)

Our input, $$x$$, will be a vector of size four because we have four neurons in the input layer. We never count the bias unit as a neuron; It's present in all layers except the output. The first bias will be a vector of size two because there are two neurons in the hidden layer. Our weights for each neuron in the hidden layer will be represented as rows in a matrix, $$W_1$$. The superscript represents which neuron in the hidden layer we’re on. The subscript represents which number weight for that neuron. 

$$
W_1=
\begin{bmatrix}
w^{[1]}_1 & w^{[1]}_2 & w^{[1]}_3 & w^{[1]}_4\\
w^{[2]}_1 & w^{[2]}_2 & w^{[2]}_3 & w^{[2]}_4
\end{bmatrix}
$$

We have eight solid, purple lines and two dotted, purple lines in the diagram above, so we'll need eight elements in our weight matrix and two in our bias vector.

Arranging the weights like so allows us to use a neat property of matrix multiplication. When we multiply $$W_1$$ by $$x$$, we'll get a vector with a length of 2. Adding that to our bias vector, $$b_1$$, grants us the values for our hidden layer. Again, $$f(x)$$ is the activation function for the hidden layer.

Feel free to learn more about matrix multiplication [here](https://www.mathsisfun.com/algebra/matrix-multiplying.html).

$$
\begin{gather}
\text{hidden layer} = f(W_1x+b_1)\\
=f\left(
\begin{bmatrix}
w^{[1]}_1x_1 + w^{[1]}_2x_2 + w^{[1]}_3x_3 + w^{[1]}_4x_4\\
w^{[2]}_1x_1 + w^{[2]}_2x_2 + w^{[2]}_3x_3 + w^{[2]}_4x_4
\end{bmatrix}+
\begin{bmatrix}
w^{[1]}_0\\
w^{[2]}_0
\end{bmatrix}
\right)
\end{gather}
$$

The bias term is necessary because it adds some flexibility to our network. Think about the equation for a simple line: $$y=mx+b$$. The $$b$$ indicates the line's y-intercept. Without it, all lines would be required to cross the origin point, which is a severe restriction when trying to model real world scenarios. The bias vector here plays the same role.

The exact process is repeated to get the values for the output layer. The weight matrix for the output layer, $$W_2$$ will be a 3 x 2 matrix. Each row in $$W_2$$ represents the weights for each neuron in the output layer. Each column represents the weights from a neuron from the hidden layer. The output layer will have a bias vector of length 3. Let's call the values in the hidden layer $$h$$ and the activation function for the output layer $$g(x)$$ .
<!--- Center the following -->
$$\text{output layer} = g(W_2h+b_2)$$

As a rule of thumb, the dimensions for any given weight matrix will be the number of neurons in the current layer by the number of neurons in the previous layer. The length of the bias vector will be the number of neurons in the current layer.

## Activation Functions

Activation functions introduce non-linearity to the neural network. This gives the network the ability to solve problems beyond those that a basic linear regression could solve.

After the linear transformation for each layer, the result is then passed into that layer's activation function to get the layer's output.

### Sigmoid

The Sigmoid function is one of the most common activation functions. At 0, it's equal to 0.5 and as it approaches infinity, it asymptotes towards 1. As it approaches negative infinity, it approaches 0.

![Sigmoid Function](/blogAssets/images/nn/sigmoid_func.svg)

### Tanh

The Tanh function is very similar to the sigmoid, but its asymptote as it approaches negative infinity is -1.

![Activation Functions](/blogAssets/images/nn/tanh_func.svg)

### ReLu

The ReLu function, or the Rectified Linear Unit, is a unique one because of its kink at 0, meaning it's not differentiable there. It's a piecewise function that returns 0 for all negative inputs and the input itself for all positive numbers. It essentially acts as a hard gate, letting all positive numbers through, but not negative ones.

![Activation Functions](/blogAssets/images/nn/relu_func.svg)

### GeLu

The GeLu, or the Gaussian Error Linear Unit, aims to mirror the shape of ReLu, but avoids having the kink, making it differentiable everywhere. It's equal to $$x$$ times the Gaussian cumulative distribution function, which is represented by $$\phi$$.

![Activation Functions](/blogAssets/images/nn/gelu_func.svg)

&nbsp;
- - -
&nbsp;

Certain activation functions, such as the sigmoid or tanh functions, constrain the output to a specified range. This helps prevent some neurons from overpowering the rest of the network. However, given that functions such as the ReLu and GeLu are still very commonly used, this is not a strict requirement.

Activation functions also need to be differentiable. This allows us to calculate the gradients of the cost function and minimize it. The ReLu is unique because it's not differentiable at 0, but we just manually set the derivative to be 0 there.

I won't calculate each of the derivatives by hand, but I've inserted them below.

$$
\begin{align*}
\sigma'(x)&=\sigma(x)(1-\sigma(x))\\
\tanh'(x)&=1-tanh^2(x)\\
ReLu'(x)&=\begin{cases}
        0 & \text{if } z_1 \leq 0\\
        1 & \text{if } z_1 > 0
    \end{cases}\\
GeLu'(x)&=\phi(x)+xP(X=x)
\end{align*}
$$

As a side note, $$P(X=x)$$ is the value of the PDF of the standard normal curve at $$x$$, and $$\phi(x)$$ is the value of the CDF of the standard normal curve at $$x$$.

One useful feature of the derivatives for the sigmoid and tanh functions is that the derivative is a function of the original output, which makes calculating the derivatives simple.

### Softmax

Another activation function I want to mention is the softmax function. It doesn't have a graph, because its input is all of the layer's neurons arranged in a vector.
<!--- Center the following -->
$$S(x)=\frac{e^{x_i}}{\sum^{N}_{k=1}e^{x_k}}$$

The useful feature of the softmax activation function is that all of the values now add up to 1, allowing us to interpret the result as probabilities. This is useful for multiclass classification problems.

We won't dive into the derivative of this function here because it requires the Jacobian matrix as it's a function that takes in a vector and outputs another vector. The other activation functions took in a number and returned one as well.

&nbsp;
- - -
&nbsp;

There are many functions I haven't mentioned, but if you're interested, I encourage you to look into the Binary Step function, Leaky ReLu, ELU, SoftPlus, Swish, and many more not listed here.

There's not one activation function that rules above all else. It's dependent on the specific use case. I would recommend starting with the ReLu for the hidden layers and the softmax activation function for the output layer. Then, taking into account factors such as accuracy of the network and training speed, see if modifying the activation functions yield any improvements.

## Forward Pass

Now that we got our basic building blocks, let’s put them all together for an example forward pass.

Let's use the network from above, but add the ReLu activation function, $$R(x)$$ to the hidden layer and the sigmoid activation function, $$\sigma(x)$$, to the output layer. We start with our input, $$x$$.

$$
\begin{align*}
z_1&=W_1x+b_1\\
a_1&=R(z_1)\\
z_2&=W_2a_1+b_2\\
\text{output}&=\sigma(z_2)\\
\text{prediction}&=argmax(\text{output})
\end{align*}
$$

The key insight to gather here is the entire network is a bunch of nested functions. The result of the first linear transformation with $$W_1$$ and $$b_1$$ is the input for the ReLu function. The result of the ReLu function is the input for the second linear transformation, and so on.

The index value of the neuron with the highest value in the output layer is considered our prediction.

If we wanted to, we could write the whole network on one line. It's probably clear why we don't though. It'll get harder to read as the number of layers increase.

<!--- Center the following: -->

$$\text{output layer}=\sigma(W_2(R(W_1x+b_1))+b_2)$$

This insight will come in handy when we start to calculate the derivatives soon.

## Cost functions

After a forward pass for one training example, we pass the values of the output layer (our predicted values) into a cost function, along with the true values for that data point. The cost function then returns a number indicating how "incorrect" the prediction is. The higher the output is, the more incorrect our predictions are relative to the ground truth.

Assume the first input to the loss function is our prediction and the second the ground truth.

$$
\mathcal{L}\left(
    \begin{bmatrix}
        0.78\\
        0.05\\
        0.12
    \end{bmatrix},
    \begin{bmatrix}
        1\\
        0\\
        0
    \end{bmatrix}
\right) <
\mathcal{L}\left(
    \begin{bmatrix}
        0.23\\
        0.59\\
        0.07
    \end{bmatrix},
    \begin{bmatrix}
        0\\
        0\\
        1
    \end{bmatrix}
\right)
$$

We want our loss function to return a smaller value for the pair of inputs on the left, because the prediction vector is closer to the ground truth vector. The goal of training is to minimize our cost function across all training examples. This means we need a way to measure how different our predictions are from the ground truth and the function needs to be differentiable.

### MSE

The most basic cost function is the Mean Squared Error loss. 

$$MSE=\frac{1}{2N}\sum^{N-1}_{k=0}\left(y_k - \hat y_k\right)^2$$

We're taking our prediction vector and subtracting it from our ground truth, squaring it, and summing across all training examples. Check out my post about linear regression [here](./linear-regression.html) for a deeper intuition as to what exactly is happening.

For a singular training example, we'll be minimizing the following:

$$\frac{\left(y-\hat y\right)^2}{2}$$

The $$2$$ in the denominator will cancel out when we take the derivative of the function, which is $$-(y-\hat y)$$.

<!--- Add derivatives for the following three cost functions. -->

### Binary Cross Entropy

$$\text{Binary CE}=-\left(y\ln(\hat y)+(1-y)\ln(1-\hat y)\right)$$

The Binary Cross Entropy cost function is used when you need the network to classify between two classes. It addresses one of the issues that are prominent with MSE combined with the logistic sigmoid: If the ground truth is 0 and the prediction is close to 1, and vice versa, then the error term evaluates to be near zero. This means the weights won't be updated when the network's predictions are extremely off, defeating the purpose of training it.

### Categorical Cross Entropy

$$\text{Categorical CE}=-\sum^{n}_{k=1}y_i\log\hat y_i$$

The Categorical Cross Entropy is the extension of the Binary CE into tasks that classify more than two classes. It's used when the data's y-values are one-hot encoded, meaning that they're vectors of all zeroes except one one, whose index position represents the y-value.

### Sparse Categorical Cross Entropy

The Sparse Categorical CE has the same equation as the Categorical CE but is used when the y-values are class indices, rather than one-hot encoded vectors.

## Backward prop

This is the complicated part of a neural network, the training process. I’ve redrawn the neural network from above in a slightly different manner. This format will help us understand the calculus more easily.

<img src="/blogAssets/images/nn/ReformattedNetwork.svg" style="height: 300px">

The colors represent each layer and each rectangle represents an operation that’s performed in the network. The output of one function is the input for the next one. We pass $$x$$ into the first linear transformation, $$z_1(x, W_1, b_1)$$, then into the ReLu activation function, $$R(x)$$, then into the second linear transformation, $$z_2(a_1, W_2, b_2)$$, then into the sigmoid activation function, $$\sigma(x)$$, and finally into the loss function, $$\mathcal{L}(a_2, y)$$, to calculate the error.

I hope this reinforces the insight of how a neural network is a bunch of nested functions.

### Chain Rule Review

Imagine we're trying to find the derivative of $$h(x)$$, which is comprised of two functions, one nested in the other, i.e. $$h(x)=f(g(x))$$, or the output of $$g(x)$$ is the input of $$f(x)$$.

Let's say $$f(x)$$ and $$g(x)$$ are equal to the equations below.

$$
\begin{align*}
f(x)&=x^2\\
g(x)&=5x+3\\
h(x)&=(5x+3)^2
\end{align*}
$$

The chain rule dictates how to take the derivative of nested functions; You derive the outer one while treating the inner function as a variable. Then, you multiply the result by the derivative of the inner function. So the derivative of $$h(x)$$ is $$f'(g(x))g'(x)$$. In other words, $$\frac{dh}{dx}=\frac{df}{dg}\frac{dg}{dx}\\$$.

$$
\begin{align*}
f'(x)&=2x\\
g'(x)&=5\\
h'(x)&=2(5x+3)*5\\
&=10(5x+3)\\
&=50x+30
\end{align*}
$$

### Partial Derivatives Review

Let's say we have the following equation, $$f(x, y) = x^2y$$. Partial derivatives represent the change in the output of the equation when one of the input variables is changed by a small amount. The partial derivative of $$f(x, y)$$ is how the output of the function will be affected when changing $$x$$ by a small while keeping $$y$$ constant. The partial derivative with respect to $$y$$ is how the output of the function will be affected when changing $$y$$ by a small while keeping $$x$$ constant.

To calculate the partial derivatives, we take the derivative like normal but pretend one of the variables is just like any other constant.

If either the chain rule or the partial derivatives are confusing, I recommend watching [this video](https://www.youtube.com/watch?v=YG15m2VwSjA) about the chain rule by 3Blue1Brown or [this video](https://www.youtube.com/watch?v=AXqhWeUEtQU) about partial derivatives by Khan Academy.

$$
\begin{align*}
\frac{\partial f}{\partial x}&=2xy\\
\frac{\partial f}{\partial y}&=x^2
\end{align*}
$$

When we stack all of the partial derivatives into a vector, we call that the gradient vector of a function.
$$\nabla f=
\begin{bmatrix}
2xy\\
x^2
\end{bmatrix}
$$

&nbsp;
- - -
&nbsp;

The premise of the backpropagation algorithm is that we need to take the partial derivative of the cost function with respect to each of the weight matrices and bias vectors. There are four partial derivatives in total we want to calculate: $$\frac{\partial \mathcal{L}}{\partial W_1}$$, $$\frac{\partial \mathcal{L}}{\partial b_1}$$, $$\frac{\partial \mathcal{L}}{\partial W_2}$$, and $$\frac{\partial \mathcal{L}}{\partial b_2}$$.

These are the four parameters of our network, the ones we want to optimize. We can now use the chain rule to write the equations for each of these.

<!--- Make a comment telling the reader to not worry and maybe walk them through the first one to see how we calculated it. -->

$$
\begin{align*}
\frac{\partial \mathcal{L}}{\partial b_2}&=\frac{\partial \mathcal{L}}{\partial a_2}\frac{\partial a_2}{\partial z_2}\frac{\partial z_2}{\partial b_2}\\
\frac{\partial \mathcal{L}}{\partial W_2}&=\frac{\partial \mathcal{L}}{\partial a_2}\frac{\partial a_2}{\partial z_2}\frac{\partial z_2}{\partial W_2}\\
\frac{\partial \mathcal{L}}{\partial b_1}&=\frac{\partial \mathcal{L}}{\partial a_2}\frac{\partial a_2}{\partial z_2}\frac{\partial z_2}{\partial a_1}\frac{\partial a_1}{\partial z_1}\frac{\partial z_1}{\partial b_1}\\
\frac{\partial \mathcal{L}}{\partial W_1}&=\frac{\partial \mathcal{L}}{\partial a_2}\frac{\partial a_2}{\partial z_2}\frac{\partial z_2}{\partial a_1}\frac{\partial a_1}{\partial z_1}\frac{\partial z_1}{\partial W_1}
\end{align*}
$$

If you look closely, you'll see a lot of repeated partials across all of the equations, such as the product $$\frac{\partial \mathcal{L}}{\partial a_2}\frac{\partial a_2}{\partial z_2}$$. This is convenient for us because it means we can just compute them once and store them for later use.

Just as a reminder, $$\frac{\partial a_1}{\partial z_1}$$ and $$\frac{\partial a_2}{\partial z_2}$$ are the derivatives of the ReLu and sigmoid functions, respectively.

### Calculating the Partials

Given that the loss function is comprised of several nested functions, we'll be needing to utilize the chain rule throughout our computations.

To calculate all of the partials, we'll need to find the derivatives of each of the cells in our diagram from above. Then, we'll need to multiply the appropriate results for each partial we're trying to find.

Let's start with our cost function, Mean Squared Error. Because $$a_2$$, (written as $$\hat y$$ above), is a function of our weights and biases, we want to take the partial derivative with respect to that.

$$
\begin{align*}
\mathcal{L}(a_2)&=\frac{(y-a_2)^2}{2}\\
\frac{\partial \mathcal{L}}{\partial \hat y}&=-(y-a_2)
\end{align*}
$$

Moving on to the derivative of the sigmoid. We've already seen it, but here it is one more time.

<!--- Center the following: -->

$$\sigma'(z_2)=\sigma(z_2)(1-\sigma(z_2))$$

Now, let's calculate the partial of the second linear transformation, $$W_2a_1+b_2$$, with respect to $$W_2$$ because we want to optimize our weight matrices. It's just $$a_1$$. The partial with respect to our bias vector is $$1$$. And our partial with respect to $$a_1$$ is $$W_2$$; We'll need this partial as we propagate further back for $$W_1$$ and $$b_1$$.

We have all of the pieces of our equation to write the complete partial derivatives for $$W_2$$ and $$b_2$$. I'm using $$*$$ to represent element-wise multiplication.

$$
\begin{align*}
\frac{\partial \mathcal{L}}{W_2}&=\frac{\partial \mathcal{L}}{\partial a_2}\frac{\partial a_2}{\partial z_2}\frac{\partial z_2}{\partial W_2}\\
\frac{\partial \mathcal{L}}{\partial a_2}&=-(y-a_2)\\
\frac{\partial a_2}{\partial z_2}&=\sigma'(z_2)\\
\frac{\partial z_2}{\partial W_2}&=a_1\\
\frac{\partial \mathcal{L}}{W_2}&=-(y-a_2)*\sigma'(z_2)a_1^T
\end{align*}
$$

The transpose for $$a_1$$ is necessary to get the dimensions to align. $$y$$, $$a_2$$, and $$z_2$$ are each going to be $$3 \times 1$$ vectors, while $$a_1$$ will be a $$2 \times 1$$ vector. Transposing $$a_1$$ and multiplying yields us a $$3 \times 2$$ matrix, which are the exact dimensions for $$W_2$$.

The dimensions of the derivative of a vector/matrix will be the same as the dimensions of the original vector/matrix.

The partial with respect to our bias is very similar.

$$
\begin{align*}
\frac{\partial \mathcal{L}}{b_2}&=\frac{\partial \mathcal{L}}{\partial a_2}\frac{\partial a_2}{\partial z_2}\frac{\partial z_2}{\partial b_2}\\
\frac{\partial z_2}{\partial b_2}&=1\\
\frac{\partial \mathcal{L}}{b_2}&=-(y-a_2)*\sigma'(z_2)
\end{align*}
$$

We call $$-(y-a_2)*\sigma'(z_2)$$ the error term for the output layer, also referred to as $$\delta$$. The gradient for any weight is the layer's error term times the input from the previous layer. Note that the gradient of the bias weight is just the error term. This makes sense because the value of the bias term is $$1$$.

The error term is useful to calculate separately because error terms in earlier layers are dependent on error terms in later layers. The backpropagation algorithm is named as such because we "propagate" the error backwards through the network to calculate the gradients.

The derivative of the ReLu function is a little bit unorthodox as we saw above.

$$
\frac{\partial R}{\partial z_1}=
    \begin{cases}
        0 & \text{if } z_1 \leq 0\\
        1 & \text{if } z_1 > 0
    \end{cases}
$$

The derivatives of the first linear transformation are the same as the one previously computed. The derivative with respect to $$W_1$$ is $$x$$ and the derivative with respect to $$b_1$$ is $$1$$. We can use these pieces to calculate the partials with respect to $$W_1$$ and $$b_1$$.

$$
\begin{align*}
\frac{\partial \mathcal{L}}{W_1} &= \frac{\partial \mathcal{L}}{\partial a_2}\frac{\partial a_2}{\partial z_2}\frac{\partial z_2}{\partial a_1}\frac{\partial a_1}{\partial z_1}\frac{\partial z_1}{\partial W_1}\\
\frac{\partial z_2}{\partial a_1} &= W_2\\
\frac{\partial a_1}{\partial z_1} &= \begin{cases}
        0 & \text{if } z_1 \leq 0\\
        1 & \text{if } z_1 > 0
    \end{cases}\\
\frac{\partial z_1}{\partial W_1} &= x\\
\frac{\partial \mathcal{L}}{W_1}&=W_2^T \left(-(y-a_2)*\sigma'(z_2)\right)*R'(z_1)x^T\\\\
\end{align*}
$$

$$
\begin{align*}
\frac{\partial \mathcal{L}}{b_1}&=\frac{\partial \mathcal{L}}{\partial a_2}\frac{\partial a_2}{\partial z_2}\frac{\partial z_2}{\partial a_1}\frac{\partial a_1}{\partial z_1}\frac{\partial z_1}{\partial b_1}\\
\frac{\partial z_1}{\partial b_1} &= 1\\
\frac{\partial \mathcal{L}}{b_1}&=W_2^T \left(-(y-a_2)*\sigma'(z_2)\right)*R'(z_1)
\end{align*}
$$

Again, the error term of the hidden layer is $$W_2^T \left(-(y-a_2)*\sigma'(z_2)\right)*R'(z_1)$$. It contains the error term from the output layer. If there were any more hidden layers before this one, we would've repeated this process to calculate the error terms for those layers.

Because we're in the realm of Linear Algebra, it helps to outline the expected dimensions of the values in our gradients, as a sanity check. Our expected dimensions are $$2 \times 4$$ for $$\frac{\partial \mathcal{L}}{W_1}$$ and $$2 \times 1$$ for $$\frac{\partial \mathcal{L}}{b_1}$$.

$$
\begin{align*}
-(y-a_2)&\rightarrow(3 \times 1)\\
\sigma'(z_2)&\rightarrow(3 \times 1)\\
W_2^T&\rightarrow(2 \times 3)\\
R'(z_1)&\rightarrow(2 \times 1)\\
x^T&\rightarrow(1 \times 4)\\
\frac{\partial \mathcal{L}}{W_1}&\rightarrow(2 \times 4)\\\\
\end{align*}
$$

$$
\begin{align*}
-(y-a_2)*\sigma'(z_2)&\rightarrow(3\times 1)\\
W_2^T \left(-(y-a_2)*\sigma'(z_2)\right)&\rightarrow(2\times 1)\\
W_2^T \left(-(y-a_2)*\sigma'(z_2)\right)*R'(z_1)&\rightarrow(2\times1)\\
W_2^T \left(-(y-a_2)*\sigma'(z_2)\right)*R'(z_1)x^T&\rightarrow (2\times 4)

\end{align*}
$$

It looks like everything lines up!

A neat feature of the backpropagation algorithm is if we choose to change the activation functions for any of the layers, we don't need to calculate everything from scratch. We can just replace the derivative of the old activation function with the new one.

## Updating the Weights

The final step after calculating all of the gradients is actually updating the weights.

*The weights and biases are updated simultaneously after all the gradients have been calculated! Do not update the weights or biases as you calculate the gradients.*

After all of the gradients are calculated for all the parameters of the network, the final update takes place. $$\alpha$$ is our learning rate, $$\delta$$ our error term, and $$a$$ is the input from the previous layer. Remember, $$\delta$$ times $$a$$ is our gradient for that given layer.

The $$:=$$ symbol means you're assigning the value on the right side as the new value of what is on the left.

<!--- Clarify the difference between the \alpha and a because they look similar in the rendered Latex -->
$$
\begin{align*}
W_{new}&:=W_{current}-\alpha \delta a\\
b_{new}&:=b_{current}-\alpha \delta
\end{align*}
$$

The learning rate, $$\alpha$$, is a hyperparameter that controls how quickly the network learns. If it's too small, then the network will take a long time, thus costing more computational resources. If it's too large, the network will never converge, i.e., a set of optimal weights will never be found. As with all other hyperparameters, the computer scientist is tasked with experimentation to figure out the ideal learning rate for their given use case.

Don't forget that all of this was for just one data point. The entire process needs to be repeated for each data point in the train dataset to complete one epoch. Additionally, multiple epochs may be needed.

I hope the math that goes behind a neural network isn't as daunting for you now. If you have any questions or comments, please don't hesitate to reach out.
