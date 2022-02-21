<template>
  <section id="result">
    <h1>Based on your data, you might have this disease:</h1>
    <div class="card">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Issue Name</th>
            <th scope="col">Diagnostic accuracy</th>
            <th scope="col">International clasification of Disease code</th>
            <th scope="col">Specialization</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>415</td>
            <td>Bloated belly</td>
            <td>90 percent</td>
            <td>R14</td>
            <td>General Practice, Internal Medicine</td>
          </tr>
          <tr>
            <td>415</td>
            <td>Bloated belly</td>
            <td>90 percent</td>
            <td>R14</td>
            <td>General Practice, Internal Medicine</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "Result"
};
</script>

<style>
</style>