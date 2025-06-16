---
title: "Mastering Reagent: Finding the Balance between Readability and Performance"
feature_image: "/assets/photos/blog-hero-image.png"
---

Originally posted [here](https://cleancoders.com/blog/2024-08-27-mastering-reagent-finding-the-balance-between-readability-and-performance){:target="_blank" rel="noopener noreferrer"}

At Clean Coders, the main goal is to make code as clean as possible, that means to find a balance between readability and performance. Ideally readable code is not always the most efficient, similarly, optimal performance can be at the cost of how easy the code is for other contributors to read. The best way to find this balance is to establish practices that can be followed and built off. With these methodologies, it is important to utilize them in all frameworks of code, including the more atypical ones like React.

[React](https://react.dev/) is a JavaScript library that uses the component to create markup that is both modular and reusable. Due to the nature of the framework existing for a markup language, there need not be as much worry on finding the aforementioned balance. There is little presence of logic, rather markup is about structure. Even so, React components should be treated the same as any other code, Conforming to this balance that makes the code both easy to read, and optimal. At Clean Coders, Clojure is the preferred language, therefore to properly demonstrate an establishment of balance, [Reagent](https://reagent-project.github.io/) shall be used over standard React because it "provides a minimalistic interface between ClojureScript and React."

### What is the purpose of a component?

Creating a website will more than likely result in the need of reusable HTML. For example, it may be beneficial to have a navigation bar at the top of every page. Should the layout be manually rewritten on each webpage? Similar to a function call in a typical programming language, a component can be utilized to reference a predefined reusable layout. Here's a simple example of how a component might be reused:

```clojure
; == BEFORE ==

(defn barn []
[:div
  [:h2 "This barn contains"]
  [:div
    ; ... shared code ...
    [:h3 "cows"]]
  [:div
    ; ... shared code ...
    [:h3 "sheep"]]])
```

```clojure
; == AFTER ==

(defn animals [name]
  [:div
    ... shared code ...
    [:h3 name]])

(defn barn []
  [:div
    [:h2 "This barn contains"]
    (animals "cows")
    (animals "sheep")])
```
In this case, the "before" component shows most of the cows and sheep divs being rewritten, the "after" places them into separate functions to be reused without any unnecessary redundancy. Now when referring to the balance, the only consideration involved is readability. This is because the barn component is not affected by state change and is therefore static. Choosing between the "before" and "after" solely comes down to what is deemed more readable. Using a simpler div for animals would make the before example the go to, while a more complex div for animals would justify the after example where the rewritten code is extracted.

### Decoupling components from each other

Next is the fun part. When creating a front-end that allows user interaction, it will need to update the rendered markup in some shape or form. Reagent is great at accomplishing this through the use of **reagent-atoms (ratoms)** and **reagent-trackers**. For example, the number of cows that are present could be incremented with the use of a button:

```clojure
(defn barn []
  (let [cow-num (r/atom 0)]
    (fn []
      [:div
        [:h2 "This barn contains"]
        [:div 
          [:h3 (str @cow-num " cows")]]
          [:button {:on-click #(swap! cow-num inc)} "Add"]])))
```

Each click of the button will update the ratom, which subsequently re-renders any component that dereferences it. Because of how the barn component is set up, it is coupled to cows. Any changes to cows will force barn to be entirely re-rendered, this is a **Single Responsibility Principle** violation. Now with this example, it is an inexpensive render, but as barn grows in complexity with its nested elements, the cost of this coupling will continue to rise. Here is where the first crossroads between performance and readability appear. On one hand, performance can be prioritized at the cost that this code will be less clear for collaborators to understand. On the other, focusing readability could lead to future performance issues that are difficult to find. Generally, it is good practice to decide which path to take based on anticipated future cost of this component. While barn may stay relatively small and inexpensive, cows could be represented by hundreds of rendered divs that in turn, represent a cow each. Having this expectation leads to the conclusion that performance needs to take priority over readability. To do so, cows is extracted into its own component using the earlier animals function:

```clojure
(defn animals [name]
  (let [num (r/atom 0)]
    (fn [name]
      [:div 
        [:h3 (str @num " " name)]
        [:button {:on-click #(swap! num inc)} "Add"]])))

(defn barn []
  [:div
    [:h2 "This barn contains"]
    [animals "cows"]])
```

With this change, any increments of cows will only rerender cows, barn will remain unaffected by any state changes. The reason this holds true is because barn no longer contains a dereference to the ratom like it did previously. Similarly, sheep can be reintroduced as their own component. Any state changes on sheep will neither affect barn nor cows, only sheep.

### What's the deal with inner-functions?

From the previous examples, the use of inner-functions has appeared, what is the purpose of them? How are they used? Don't be alarmed by the inner nested function-it distinguishes the part of the component that should run only once from the part that should update in response to state changes. Had the inner function in the animals component not been used, cows would be unable to properly increment. Take this example without the inner-function:

```
; == THIS WILL NOT WORK ==

(defn animals [name]
  (let [num (r/atom 0)]
    [:div 
      [:h3 (str @num " " name)]
      [:button {:on-click #(swap! num inc)} "Add"]]))
```

Each time the button to add a new animal is clicked, the entire function would be run again. This is because a ratom that is used in the component is updated, Reagent components are reactive, therefore they update in response to state change. Without the inner-function to act as a partition between the run-once and the run-on-change behavior, the animals component will proceed to re-initialize the ratom at zero. With the use of the inner-function, the animals component now knows to only initialize the ratom on the first time the component is rendered. Every subsequent rendering will only affect the code that exists within the inner function, allowing the incrementing to take effect.

### [] vs (): What's the difference?

Now that inner-functions have been clarified, the difference between brackets and parenthesis must be understood as well. When defining a function to be used in a component, it can be called in one of two ways.

**1.** Square brackets "**[]**", which is a traditional way of treating the function as a reactive component. By creating a component, the structure of the newly created component will become decoupled from the parent component that it presides in. i.e. animals will decouple from barn.

**2.** Parenthesis "**()**". When a Reagent function is called with (), it is logically the same as just nesting the code in the higher level component. Using () is meant for reusing static markup that would not change how it is rendered from any state changes. Following the examples so far, barn may contain a hay bale that does not change in quantity like animals, therefore it will always be a hay bale.

```clojure
(defn animals [name]
  (let [num (r/atom 0)]
    (fn []
      [:div 
        [:h3 (str @num " " name)]
        [:button {:on-click #(swap! num inc)} "Add"]])))

(defn hay-bale []
  [:h3 "a hay bale"])

(defn barn []
  [:div
    [:h2 "This barn contains"]
    (hay-bale)
    [animals "cows"]])
```

Unlike components, calling functions with () does not provide any potential boost in performance, therefore this extraction of hay-bale only has a negative effect of making the code harder to read. Typically, the use of () will occur during refactoring; once it is discovered that hay-bale could be reusable in other components, extracting it out will become useful. This is also under the assumption that hay-bale is more complex than a simple h3 element.

Understanding the difference between [] and () becomes important when misuse of them can lead to decreasing performance without increasing readability whatsoever. If the implementation of cows is restructured such that the ratom is passed into the cows function, the same behavior can be achieved through either [] or (). However, in this scenario, calling the cows function will rerender barn if through (), and will not if through [].

```clojure
(defn cows [num]
 [:div [:h3 (str @num " cows")]])


; == WILL RERENDER BARN ==

(defn barn []
  (let [cow-num (r/atom 0)]
    (fn []
      [:div
        [:h2 "This barn contains"]
        (cows cow-num)
        [:button {:on-click #(swap! cow-num inc)} "Add"]])))


; == WON'T RERENDER BARN ==

(defn barn []
 (let [cow-num (r/atom 0)]
   (fn []
      [:div
        [:h2 "This barn contains"]
        [cows cow-num]
        [:button {:on-click #(swap! cow-num inc)} "Add"]])))
```

In cases like this, there is no downside to choosing the optimal method for how to structure these components.

### When to use reagent-trackers
Reagent trackers work very similarly to ratoms where they can be the catalyst for a component to rerender. Where they differ from ratoms is they are two layers deep, while a ratom is one. What that means is a ratom directly stores information; upon update of the ratom, any components with a dereference to it update. Trackers on the other hand act almost like a component themselves, they track the return value of a function that dereferences a ratom, that return value is updated when the state of the ratom changes. Therefore, when using a tracker, a component is updated when it contains a dereference of a tracker that gets a new return value from a function that contains a dereference of a ratom that updates. (what a mouthful!) It's worth noting that trackers can track functions that dereference other trackers making them actually n layers deep, but typically they aren't that complex. Here's an example of how a tracker might be used:


```clojure
(def animals (r/atom []))

(defn barn []
 (let [first-animal (r/track #(first @animals))]
    (fn []
      [:div
        [:h3 (str "The first animal is a " @first-animal)]
        [:button {:on-click #(swap! animals conj "cow")} "Add"]])))
```

Trackers are advantageous for both performance and readability. First they are able to set fields to not obvious function returns. For example, a tracker could be named second-cows-name that holds the field for the second existing cows name, this can be incredibly helpful for collaborators to understand the intentions of what is being rendered. When talking about performance, trackers can prevent unnecessary re-renders. Consider the following example where the first animal in a list is tracked with a ratom.

```clojure
; == FIRST-ANIMAL RE-RENDERS EACH BUTTON PRESS ==

(def animals (r/atom []))

(defn first-animal []
  [:div
    [:h3 "animals"]
    [:h3 (str "The first animal is a " (first @animals))]])

(defn barn []
  [:div
    [:h2 "This barn contains"]
    [first-animal]
    [:button {:on-click #(swap! animals conj "cow")} "Add"]])
```

```clojure
; == FIRST-ANIMAL RE-RENDERS ONLY ON FIRST BUTTON PRESS ==

(def animals (r/atom []))

(defn first-animal []
  (let [animal-first (r/track #(first @animals))]
    (fn []
      [:div
        [:h3 "animals"]
        [:h3 (str "The first animal is a " @animal-first)]])))

(defn barn []
  [:div
    [:h2 "This barn contains"]
    [first-animal]
    [:button {:on-click #(swap! animals conj "cow")} "Add"]])   
```

The ratom is always changing value whenever the button is pressed. However, by restructuring the component to use a tracker that watches the first animal in the animal list, the first-animal component is not re-rendered each subsequent time the button is pressed. The reason this behavior occurs, is because re-renders only occur when the dereferenced value in a component changes. The first animal in the list will always remain the same after each button click, therefore the dereferenced tracker stays the same.

### Concluding Arguments

When designing a Reagent layout, it is critical to be strategic about where data is passed, and how components are extracted from each other. Balancing readability and performance can be tricky and oftentimes comes down to personal judgement, but an informed coder will design the better system. When designing for readability, consider who the collaborators are. Are they all coders? Are there UX designers who are used to seeing markup in large blocks? Heavily extracting functions will make it difficult to follow for others, and typically gains little to no optimization. When designing for performance, anticipate the cost, or future cost of a component. Will this component be rendered many times? Will this component grow in complexity? Sometimes these questions are hard to answer, a system can be vastly different years later. Know the system, understand which elements appear complex and commonly. When front-end performance becomes noticeably slower, an informed Reagent user will know how to make a list of suspects to refactor. Generally, components are less likely to have performance issues when they are less responsible for what data they are dereferencing.