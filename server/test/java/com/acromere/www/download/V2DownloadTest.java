package com.acromere.www.download;

import org.junit.jupiter.api.Test;

import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;

public class V2DownloadTest {

	@Test
	public void testFilename() {
		assertThat( V2Download.responseFilename( "artifact", "platform", "asset", "format", Map.of() ) ).isEqualTo( "artifact-asset-platform.format" );
		assertThat( V2Download.responseFilename( null, "platform", "asset", "format", Map.of() ) ).isEqualTo( "asset-platform.format" );
		assertThat( V2Download.responseFilename( null, null, "asset", "format", Map.of() ) ).isEqualTo( "asset.format" );
		assertThat( V2Download.responseFilename( "artifact", null, "asset", "format", Map.of() ) ).isEqualTo( "artifact-asset.format" );

		assertThat( V2Download.responseFilename( "artifact", "platform", "asset", "format", Map.of( "theme", "grey" ) ) ).isEqualTo( "artifact-asset-grey-platform.format" );
		assertThat( V2Download.responseFilename( null, "platform", "asset", "format", Map.of( "theme", "grey" ) ) ).isEqualTo( "asset-grey-platform.format" );
		assertThat( V2Download.responseFilename( null, null, "asset", "format", Map.of( "theme", "grey" ) ) ).isEqualTo( "asset-grey.format" );
		assertThat( V2Download.responseFilename( "artifact", null, "asset", "format", Map.of( "theme", "grey" ) ) ).isEqualTo( "artifact-asset-grey.format" );

		// Errata
		assertThat( V2Download.responseFilename( "artifact", "platform", null, "format", Map.of() ) ).isEqualTo( "artifact--platform.format" );
		assertThat( V2Download.responseFilename( "artifact", "platform", "asset", null, Map.of() ) ).isEqualTo( "artifact-asset-platform.null" );
	}

}
