    // Make the div with id 'mycell' a Sage cell
    sagecell.makeSagecell({inputLocation:  '#mycell',
                           template:       sagecell.templates.minimal,
                           evalButtonText: 'Activate'});
    // Make *any* div with class 'compute' a Sage cell
    sagecell.makeSagecell({inputLocation: 'div.compute',
                           evalButtonText: 'Evaluate'});
