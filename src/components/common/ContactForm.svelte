<script lang="ts">
  function handleSubmit(e: any) {
    alert(e);
  }
</script>

<form method="POST" class="w-full max-w-lg" id="contact-form" data-hs-do-not-collect="true">

  <div class="flex flex-wrap mb-6">
    <label
      class="block uppercase tracking-wide text-gray-700 dark:text-slate-300 text-xs font-bold mb-2"
      for="companyname"
    >
      Bedriftsnavn
    </label>
    <input
      id="companyname"
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      name="companyname"
      type="text"
    />

    <div class="w-full grid grid-cols-2 gap-4">
      <div>
        <label
          class="block uppercase tracking-wide text-gray-700 dark:text-slate-300 text-xs font-bold mb-2"
          for="firstname"
        >
          Fornavn
        </label>
        <input
          id="firstname"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          name="firstname"
          type="text"
        />
      </div>

      <div>
        <label
          class="block uppercase tracking-wide text-gray-700 dark:text-slate-300 text-xs font-bold mb-2"
          for="lastname"
        >
          Etternavn
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          name="lastname"
          type="text"
        />
      </div>

      <div>
        <label
          class="block uppercase tracking-wide text-gray-700 dark:text-slate-300 text-xs font-bold mb-2 required"
          for="email"
        >
          Epost
        </label>
        <input
          id="email"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          name="email"
          type="email"
          required
        />
      </div>

      <div>
        <label
          class="block uppercase tracking-wide text-gray-700 dark:text-slate-300 text-xs font-bold mb-2"
          for="phone"
        >
          Telefon
        </label>
        <input
          id="phone"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          name="phone"
          type="tel"
        />
      </div>
      </div>


      <label
        class="block uppercase tracking-wide text-gray-700 dark:text-slate-300 text-xs font-bold mb-2 required"
        for="message"
      >
        Henvendelse
      </label>
      <textarea
        id="message"
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        name="message"
        rows="5"
        required
      />

      <button class="btn btn-primary rounded-lg w-full" on:submit|preventDefault={handleSubmit} type="submit">Send forespørsel</button>
    </div>
</form>

<style>
  .required:after {
    content: ' *';
    color: red;
  }
</style>
