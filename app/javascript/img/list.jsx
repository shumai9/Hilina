
<%= csp_meta_tag %>

<h1>Acount Health </h1>
            <h5>User profile<h5>
            <ul className="net" key={items.id}>
              <li>Total Assets: {items.assets_total_sum}</li>
                <li>Total Commitments: { items.commitments_total_sum}</li>
              <li>Net-worth: {items.current_networth}</li>
            </ul>

            display: grid;
  grid-template-columns: 30rem repeat(auto-fill, minmax(100px, 56vw));
  grid-template-rows: 20vw auto 20vw;
  grid-gap: 0.50em;