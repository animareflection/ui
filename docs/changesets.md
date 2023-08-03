# Changesets 🦋

Changesets ([Wikipedia](https://en.wikipedia.org/wiki/changeset)) represent an _intent_ to evolve a project in the form of a collection of changes. This project uses a tool with the same name, [Changesets](https://github.com/changesets/changesets), to manage them and handle the versioning, changelog generation, and release lifecycle.

## Creation

1. To create a changeset, run `yarn changeset` in the project directory.

2. You will be prompted to select a bump type, based on the [SemVer](https://semver.org/) spec.

3. Write a message describing the change, using present tense and starting with a verb. For example, if you are adding a new component called `Card`, you might write:

```
Add `Card` component
```

If you're fixing a bug for the Card component, you might write:

```
Fix `Card` resizing after initial page load
```

After the changeset is created, it will be added to the `.changeset` folder, where it can be safely modified and committed. There is no limit to the number of changesets you can create, even in one PR.

## Learn More

View the [official Changesets documentation](https://github.com/changesets/changesets/tree/main#documentation) to learn more about the tool and how to use it.
