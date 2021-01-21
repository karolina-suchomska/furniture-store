<template>
  <div class="pop-up">
    <div class="pop-up-container">
      <div class="close">
        <button
            class="button-close"
            @click="close()"
        />
      </div>
      <div class="shipping-cost-info">
        <h2>
          Tabela kosztów wysyłki
        </h2>
        <table>
          <tbody>
            <tr>
              <th>Przesyłka kurierska</th>
              <td>40 zł</td>
            </tr>
            <tr>
              <th>Przesyłka kurierska za pobraniem</th>
              <td>60 zł</td>
            </tr>
            <tr>
              <th>Odbiór w punkcie</th>
              <td>50 zł</td>
            </tr>
            <tr>
              <th>Odbiór osobisty</th>
              <td>0 zł</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close () {
      this.$emit('popup', false);
    }
  }
};
</script>
